---
title: 피드백과 퀴즈 생성하기
---

# 피드백과 퀴즈 생성하기

워크플로우는 AI를 두 번 호출합니다.

1. 피드백 생성
2. OX 퀴즈 생성

## 왜 두 번 나누나요?

피드백과 퀴즈는 목적이 다릅니다.

피드백은 사용자의 노트에서 잘못된 개념을 찾아야 합니다.

퀴즈는 학습자가 다시 점검할 수 있는 문제를 만들어야 합니다.

두 작업을 나누면 프롬프트도 단순해지고 결과 형식도 관리하기 쉬워집니다.

## 피드백 결과

피드백은 XML 형식으로 받습니다.

```xml
<feedback-case type="error">
  <item>
    <number>1</number>
    <wrong>잘못된 부분</wrong>
    <correct>수정 사항</correct>
    <explanation>설명</explanation>
    <reference>참고한 자료</reference>
  </item>
</feedback-case>
```

## 퀴즈 결과

퀴즈는 JSON 배열로 받습니다.

```json
[
  {
    "question": "소프트웨어 공학은 유지보수도 다룬다.",
    "answer": "O",
    "explanation": "소프트웨어 공학은 개발과 유지보수를 체계적으로 다룬다."
  }
]
```

## API 호출

n8n의 HTTP Request 노드가 Upstage Chat API를 호출합니다.

이때 `.env`에 넣어 둔 `UPSTAGE_API_KEY`가 사용됩니다.
n8n의 HTTP Request 노드가 Upstage Chat API를 호출합니다.

이번 실습에서는 피드백 생성과 OX 퀴즈 생성을 나누어 실행합니다. 이렇게 하면 각 결과의 형식을 더 안정적으로 관리할 수 있습니다.
