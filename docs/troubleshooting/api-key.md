---
title: API Key 오류가 날 때
---

# API Key 오류가 날 때

AI 호출이나 OCR 호출에서 오류가 난다면 API Key 설정을 확인합니다.

## `.env` 확인

실습 폴더의 `.env` 파일을 엽니다.

```env
UPSTAGE_API_KEY=up_여기에_내_API_KEY
UPSTAGE_CHAT_MODEL=solar-pro
N8N_SECURE_COOKIE=false
N8N_BLOCK_ENV_ACCESS_IN_NODE=false
```

## 자주 생기는 실수

- `.env.example`만 수정하고 `.env`를 만들지 않은 경우
- API Key 앞뒤에 공백이 들어간 경우
- API Key를 잘못 복사한 경우
- `.env`를 수정했지만 n8n을 재생성하지 않은 경우

## n8n 재생성

`.env`를 수정한 뒤에는 아래 명령어를 실행합니다.

```bash
docker compose up -d --force-recreate
```

이 과정을 거쳐야 n8n이 새 API Key를 읽습니다.
