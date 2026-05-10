---
title: 환경변수 준비하기
---

# 환경변수 준비하기

환경변수는 프로그램이 실행될 때 필요한 설정값입니다.

이번 실습에서는 API Key를 코드에 직접 적지 않고 `.env` 파일에 넣습니다.

Docker Compose 방식은 `.env` 파일을 자동으로 읽습니다.

NPX 방식은 `.env` 파일을 자동으로 읽지 않으므로, n8n을 실행하기 전에 터미널에서 `.env` 값을 환경변수로 불러와야 합니다.

## `.env` 만들기

```bash
cp .env.example .env
```

## `.env` 수정하기

```env
UPSTAGE_API_KEY=up_여기에_내_API_KEY
UPSTAGE_CHAT_MODEL=solar-pro
N8N_SECURE_COOKIE=false
N8N_BLOCK_ENV_ACCESS_IN_NODE=false
```

| 이름 | 의미 |
| --- | --- |
| `UPSTAGE_API_KEY` | Upstage API를 사용하기 위한 열쇠입니다. |
| `UPSTAGE_CHAT_MODEL` | 사용할 AI 모델 이름입니다. |
| `N8N_SECURE_COOKIE` | 로컬 실습 환경에서 n8n 로그인을 편하게 하기 위한 설정입니다. |
| `N8N_BLOCK_ENV_ACCESS_IN_NODE` | n8n 워크플로우에서 환경변수를 읽을 수 있게 하는 설정입니다. |

:::warning
`.env` 파일은 공유하지 마세요. API Key가 들어 있습니다.
:::
