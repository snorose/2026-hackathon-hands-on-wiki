---
title: API Key 오류가 날 때
---

# API Key 오류가 날 때

AI 호출이나 OCR 호출에서 오류가 난다면 API Key 설정을 확인합니다.

## 자주 생기는 실수

- `.env.example`만 수정하고 `.env`를 만들지 않은 경우
- API Key 앞뒤에 공백이 들어간 경우
- API Key를 잘못 복사한 경우
- `.env`를 수정했지만 n8n을 다시 시작하지 않은 경우
- NPX 방식에서 `.env`를 터미널 환경변수로 불러오지 않은 경우
