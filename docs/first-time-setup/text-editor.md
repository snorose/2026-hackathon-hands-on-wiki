---
title: 텍스트 편집기 준비하기
---

# 텍스트 편집기 준비하기

텍스트 편집기는 설정 파일을 열고 수정할 때 사용합니다.

이번 실습에서 수정할 가능성이 있는 파일은 `.env`입니다.

## 추천 편집기

- VS Code
- Cursor
- macOS 기본 텍스트 편집기
- Windows 메모장

코딩을 하지 않아도 됩니다. API Key를 한 줄 붙여넣는 정도만 합니다.

## `.env` 파일이 보이지 않을 때

`.env`처럼 점으로 시작하는 파일은 운영체제에서 숨김 파일처럼 보일 수 있습니다.

VS Code 같은 편집기를 쓰면 더 쉽게 볼 수 있습니다.

## 수정할 내용 예시

```env
UPSTAGE_API_KEY=up_여기에_내_API_KEY
UPSTAGE_CHAT_MODEL=solar-pro
N8N_SECURE_COOKIE=false
N8N_BLOCK_ENV_ACCESS_IN_NODE=false
```

:::warning
API Key는 비밀번호와 비슷합니다. 화면 공유나 문서 캡처에 그대로 노출하지 않도록 주의하세요.
:::
