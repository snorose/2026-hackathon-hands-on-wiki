---
title: Webhook
---

# Webhook: 프론트에서 요청 받기

Webhook은 외부에서 들어오는 요청을 받는 입구입니다.

이번 실습에서는 프론트 화면이 n8n Webhook으로 데이터를 보냅니다.

## Webhook URL

```text
http://localhost:5678/webhook/solar-teacher/analyze
```

프론트 화면의 `n8n Webhook URL` 입력칸에 이 주소가 들어갑니다.

## 들어오는 데이터

텍스트 노트일 때는 대략 이런 데이터가 들어옵니다.

```json
{
  "reference_text": "참고자료 내용",
  "mode": "text",
  "content": "사용자가 입력한 노트"
}
```

파일 노트일 때는 파일 내용이 base64 문자열로 들어옵니다.

```json
{
  "reference_text": "참고자료 내용",
  "mode": "file",
  "file_name": "note.pdf",
  "mime_type": "application/pdf",
  "file_base64": "..."
}
```

## 왜 JSON으로 보내나요?

처음에는 파일을 `multipart/form-data`로 보내는 방식도 고려할 수 있습니다.

하지만 n8n 환경에 따라 파일 binary 이름이 달라질 수 있어, 이번 실습에서는 프론트가 파일을 base64로 읽어 JSON에 담아 보냅니다.

이 방식은 실습에서 더 안정적으로 동작합니다.
