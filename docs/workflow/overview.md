---
title: 워크플로우 전체 흐름
---

# 워크플로우 전체 흐름

n8n 워크플로우는 여러 노드가 순서대로 연결된 흐름입니다.

이번 워크플로우의 핵심 노드는 다음과 같습니다.

| 노드 | 역할 |
| --- | --- |
| Analyze Note Webhook | 프론트에서 요청을 받습니다. |
| Normalize Input | 입력값을 정리합니다. |
| Has Text? | 텍스트 노트인지 확인합니다. |
| Has Document? | 파일 노트인지 확인합니다. |
| Upstage OCR | 이미지/PDF에서 글자를 읽습니다. |
| Prepare Prompts | AI에게 보낼 프롬프트를 만듭니다. |
| Upstage Feedback | 피드백 생성을 요청합니다. |
| Upstage Quiz | OX 퀴즈 생성을 요청합니다. |
| Build Response | 결과를 프론트에 보낼 형태로 정리합니다. |

## 큰 흐름

```text
Webhook
  -> Normalize Input
  -> 텍스트인지 파일인지 판단
  -> 파일이면 OCR
  -> 프롬프트 생성
  -> 피드백 생성
  -> 퀴즈 생성
  -> 응답 정리
```

[아키텍처 추가 추천] n8n 워크플로우 캡처 또는 노드 흐름 다이어그램
