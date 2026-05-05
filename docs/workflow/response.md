---
title: 결과 정리하기
---

# 결과 정리하기

`Build Response` 노드는 AI 응답을 프론트가 사용하기 좋은 형태로 정리합니다.

## 정리하는 값

| 값 | 의미 |
| --- | --- |
| `raw_text` | 분석에 사용된 노트 텍스트입니다. |
| `reference_used` | 참고자료가 사용되었는지 표시합니다. |
| `feedback` | AI 피드백 XML입니다. |
| `quizzes` | OX 퀴즈 배열입니다. |

## 프론트로 보내는 응답 예시

```json
{
  "raw_text": "소프트웨어 공학은...",
  "reference_used": true,
  "feedback": "<feedback-case>...</feedback-case>",
  "quizzes": [
    {
      "question": "소프트웨어 공학은 유지보수를 다룬다.",
      "answer": "O",
      "explanation": "..."
    }
  ]
}
```

## 프론트에서는 무엇을 하나요?

프론트는 이 응답을 받아 화면에 표시합니다.

- 피드백 XML을 읽어 카드 형태로 보여줍니다.
- 퀴즈 JSON을 읽어 O/X 버튼으로 보여줍니다.
- 사용자가 O/X를 누르면 정답과 설명을 보여줍니다.
