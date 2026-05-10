---
title: Upstage API Key 준비하기
---

# Upstage API Key 준비하기

이번 실습에서는 Upstage API를 사용합니다.

Upstage는 두 가지 일을 해 줍니다.

1. 이미지/PDF에서 글자를 읽습니다. OCR
2. 노트를 보고 피드백과 퀴즈를 만듭니다. Chat API

## API Key란?

API Key는 외부 서비스를 사용할 때 필요한 열쇠입니다.

웹사이트에 로그인할 때 비밀번호가 필요한 것처럼, 프로그램이 Upstage를 사용할 때는 API Key가 필요합니다.

## 어디에 넣나요?

실습 폴더에서 `.env.example`을 복사해서 `.env`를 만들고, 그 안에 넣습니다.

```bash
cp .env.example .env
```

`.env` 파일을 열어 아래처럼 수정합니다.
Upstage API Key는 OCR과 AI 답변 생성을 사용하기 위한 열쇠입니다.

## `.env`에 넣기

```env
UPSTAGE_API_KEY=up_여기에_내_API_KEY
UPSTAGE_CHAT_MODEL=solar-pro
N8N_SECURE_COOKIE=false
N8N_BLOCK_ENV_ACCESS_IN_NODE=false
```

:::warning
API Key는 다른 사람에게 공유하지 마세요.
:::

## Key를 바꾼 뒤에는 n8n을 다시 시작해야 합니다

NPX 방식이라면 실행 중인 터미널에서 `Ctrl + C`로 n8n을 끄고, `.env`를 다시 불러온 뒤 `npx n8n`을 실행합니다.

Docker Compose 방식이라면 n8n 컨테이너를 재생성합니다.

```bash
docker compose up -d --force-recreate
```

그래야 n8n이 새 API Key를 읽습니다.
