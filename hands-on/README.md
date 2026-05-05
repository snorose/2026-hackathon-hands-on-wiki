# Solar Teacher Low-Code

n8n으로 구현한 Solar Teacher 핸즈온 버전입니다. 로그인, 회원가입, 보관함, 통계, 사지선다 퀴즈 없이 `노트 입력 -> RAG-lite 참고자료 -> AI 피드백 -> OX 퀴즈` 흐름만 남겼습니다. 텍스트 입력은 바로 분석하고, 이미지/PDF 업로드는 Upstage OCR 전용 분기를 거쳐 텍스트를 추출한 뒤 같은 피드백/퀴즈 흐름으로 이어집니다.

## 구성

- `docker-compose.yml`: 로컬 n8n 실행
- `workflows/solar-teacher-hands-on.json`: n8n에 import할 워크플로우
- `frontend/`: n8n Webhook을 호출하는 정적 화면
- `n8n_data/`: n8n 내부 SQLite와 실행 데이터를 담는 로컬 런타임 폴더
- `.env.example`: 필요한 환경변수 예시

이 핸즈온 버전은 별도 서비스 DB를 사용하지 않습니다. 결과는 프론트 화면에 즉시 반환되고, n8n 자체 운영 데이터만 `n8n_data/`의 SQLite에 저장됩니다.

## 실행

1. 환경변수를 준비합니다.

```bash
cp .env.example .env
```

`.env`에 값을 넣습니다.

```env
UPSTAGE_API_KEY=up_...
UPSTAGE_CHAT_MODEL=solar-pro
N8N_SECURE_COOKIE=false
N8N_BLOCK_ENV_ACCESS_IN_NODE=false
```

2. n8n을 실행합니다.

```bash
docker compose up -d
```

`.env`를 수정한 뒤에는 컨테이너 환경변수가 새로 들어가야 하므로 재시작만 하지 말고 재생성합니다.

```bash
docker compose up -d --force-recreate
```

3. 브라우저에서 n8n을 엽니다.

```text
http://localhost:5678
```

4. 워크플로우를 import합니다.

n8n 화면에서 `Import from File`을 선택하고 `workflows/solar-teacher-hands-on.json`을 가져옵니다. n8n 공식 문서처럼 워크플로우는 JSON 파일로 import/export할 수 있습니다.

5. 워크플로우를 활성화합니다.

활성화 후 Production Webhook URL은 아래처럼 동작합니다.

```text
http://localhost:5678/webhook/solar-teacher/analyze
```

6. 프론트 화면을 엽니다.

정적 파일만 사용하므로 아래 파일을 브라우저로 열거나 간이 서버로 실행합니다.

```bash
cd frontend
python3 -m http.server 3010
```

```text
http://localhost:3010
```

## 작동 방식

프론트는 텍스트 입력과 이미지/PDF 업로드를 모두 JSON으로 n8n Webhook에 보냅니다. 참고자료를 입력하면 `reference_text`로 함께 보냅니다. 파일 업로드는 브라우저에서 base64로 읽어 `file_base64`, `file_name`, `mime_type` 필드에 담습니다. n8n은 이 base64 값을 내부 binary field인 `document`로 바꾼 뒤 Upstage OCR API에 전달합니다.

n8n 워크플로우는 다음 일을 합니다.

- Webhook node에서 JSON 본문 수신
- 텍스트가 있으면 바로 분석 분기로 이동
- 파일만 있으면 base64를 `document` binary로 변환한 뒤 HTTP Request node로 Upstage OCR API 호출
- OCR 결과의 `text` 또는 입력 텍스트와 선택 입력한 참고자료로 피드백/퀴즈 프롬프트 생성
- HTTP Request node로 Upstage Chat API 호출
- Code node에서 응답을 프론트용 JSON으로 정리
- JSON 응답 반환

노트, 피드백, 퀴즈 결과를 별도 서비스 DB에 저장하지 않습니다.

## 프론트 화면을 따로 두는 이유

비전공자 핸즈온에서는 n8n 안에서 화면까지 만들기보다 `frontend/`의 완성된 화면을 따로 실행하는 편이 더 쉽습니다. 참가자는 브라우저 화면에서 노트와 참고자료를 입력하고, n8n에서는 Webhook, OCR, RAG-lite, LLM 호출 흐름만 살펴보면 됩니다.

## 핸즈온 학습 포인트

- Trigger: 프론트 화면에서 n8n Webhook으로 요청을 보냅니다.
- Tool use: n8n이 Upstage OCR API와 Chat API를 도구처럼 호출합니다.
- RAG-lite: 사용자가 붙여넣은 참고자료를 AI 프롬프트의 근거 자료로 넣습니다.
- Structured output: 피드백은 XML, 퀴즈는 JSON 형태로 받아 화면에 표시합니다.
- Memory: 이번 버전은 결과를 저장하지 않고, n8n 내부 SQLite는 워크플로우 실행을 위한 운영 저장소로만 사용합니다.

## 텍스트 테스트 요청

워크플로우를 활성화한 뒤 아래 요청으로 확인할 수 있습니다.

```bash
curl -X POST http://localhost:5678/webhook/solar-teacher/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "reference_text": "광합성은 엽록체에서 일어나며 빛 에너지를 화학 에너지로 전환한다.",
    "mode": "text",
    "content": "광합성은 식물이 빛 에너지를 이용해 이산화탄소와 물로부터 포도당을 만드는 과정이다."
  }'
```

정상 응답에는 `feedback`과 `quizzes` 배열이 포함됩니다.

## 이미지/PDF 테스트 요청

이미지 또는 PDF는 base64를 JSON 필드로 보냅니다.

```bash
FILE_B64=$(base64 -i /absolute/path/to/note.pdf)

curl -X POST http://localhost:5678/webhook/solar-teacher/analyze \
  -H "Content-Type: application/json" \
  -d "{
    \"reference_text\": \"교과서나 수업자료 일부를 여기에 넣습니다.\",
    \"mode\": \"file\",
    \"file_name\": \"note.pdf\",
    \"mime_type\": \"application/pdf\",
    \"file_base64\": \"$FILE_B64\"
  }"
```

정상 응답에는 OCR로 추출한 `raw_text`, `feedback`, `quizzes` 배열이 포함됩니다.

업로드했는데 `텍스트를 입력하거나 이미지/PDF 파일을 첨부해주세요.`가 나오면, n8n에 최신 `workflows/solar-teacher-hands-on.json`을 다시 import하고 프론트 페이지를 새로고침하세요. 최신 워크플로우는 Webhook의 multipart binary 파싱에 의존하지 않고 JSON base64를 내부 `document` binary로 변환합니다.

## 참고

이미 import한 워크플로우는 파일이 자동 반영되지 않습니다. 워크플로우 JSON을 수정한 뒤에는 n8n에서 `workflows/solar-teacher-hands-on.json`을 다시 import한 뒤 활성화하세요.
