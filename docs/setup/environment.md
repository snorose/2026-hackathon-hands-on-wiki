---
title: 환경변수 준비하기
---

# 환경변수 준비하기

환경변수는 프로그램이 실행될 때 필요한 설정값입니다.

이번 실습에서는 API Key를 코드에 직접 적지 않고 `.env` 파일에 넣습니다.

## `.env` 만들기

실습 폴더로 이동합니다.

```bash
cd "/Users/esc/Desktop/2026-hackathon/Solar Teacher Low-Code"
```

예시 파일을 복사합니다.

```bash
cp .env.example .env
```

## `.env` 수정하기

`.env` 파일을 열어 아래처럼 수정합니다.

```env
UPSTAGE_API_KEY=up_여기에_내_API_KEY
UPSTAGE_CHAT_MODEL=solar-pro
N8N_SECURE_COOKIE=false
N8N_BLOCK_ENV_ACCESS_IN_NODE=false
```

## 각 값의 의미

| 이름 | 의미 |
| --- | --- |
| `UPSTAGE_API_KEY` | Upstage API를 사용하기 위한 열쇠입니다. |
| `UPSTAGE_CHAT_MODEL` | 사용할 AI 모델 이름입니다. |
| `N8N_SECURE_COOKIE` | 로컬 실습 환경에서 n8n 로그인을 편하게 하기 위한 설정입니다. |
| `N8N_BLOCK_ENV_ACCESS_IN_NODE` | n8n 워크플로우에서 환경변수를 읽을 수 있게 하는 설정입니다. |

:::warning
`.env` 파일은 공유하지 마세요. API Key가 들어 있습니다.
:::
