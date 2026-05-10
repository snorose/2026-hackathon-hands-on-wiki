---
title: n8n 워크플로우 가져오기
---

# n8n 워크플로우 가져오기

워크플로우는 n8n에서 실행되는 자동화 흐름입니다.

이번 실습에서는 이미 만들어진 워크플로우 JSON 파일을 가져옵니다.

## 가져올 파일

```text
2026-hackathon-hands-on/workflows/solar-teacher-hands-on.json
```

## n8n에서 import하기

1. 브라우저에서 n8n을 엽니다.
2. `Import from File`을 선택합니다.
3. `workflows/solar-teacher-hands-on.json` 파일을 선택합니다.
4. 워크플로우가 열리면 저장합니다.
5. 워크플로우를 활성화합니다.

NPX 방식과 Docker Compose 방식 모두 가져오기 과정은 같습니다.

## Webhook URL 확인

```text
http://localhost:5678/webhook/solar-teacher/analyze
```
