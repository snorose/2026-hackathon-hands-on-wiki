---
title: 프론트가 n8n으로 보내는 데이터
---

# 프론트가 n8n으로 보내는 데이터

프론트 화면은 사용자가 입력한 내용을 n8n Webhook으로 보냅니다.

## 텍스트 모드

텍스트 모드에서는 이런 데이터가 전송됩니다.

```json
{
  "reference_text": "참고자료 내용",
  "mode": "text",
  "content": "노트 내용"
}
```

## 파일 모드

이미지/PDF 모드에서는 파일을 base64로 읽어서 보냅니다.

```json
{
  "reference_text": "참고자료 내용",
  "mode": "file",
  "file_name": "note.pdf",
  "mime_type": "application/pdf",
  "file_base64": "..."
}
```

## base64란?

base64는 파일을 글자 형태로 바꾸는 방법입니다.

원래 파일은 이미지나 PDF처럼 복잡한 데이터입니다. 이를 JSON 안에 넣으려면 글자처럼 바꿔야 합니다.

이번 실습에서는 프론트가 파일을 base64로 바꾸고, n8n이 다시 OCR에 보낼 수 있는 파일 형태로 바꿉니다.
파일 업로드는 base64로 변환해 `file_base64`, `file_name`, `mime_type` 필드에 담습니다.
