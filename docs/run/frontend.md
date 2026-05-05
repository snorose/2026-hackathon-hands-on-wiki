---
title: 프론트 화면 실행하기
---

# 프론트 화면 실행하기

프론트 화면은 사용자가 노트와 참고자료를 입력하는 화면입니다.

n8n 안에서 화면을 만들 수도 있지만, 이번 실습에서는 별도 `frontend/` 폴더의 완성된 화면을 사용합니다.

## 프론트 폴더로 이동

```bash
cd "/Users/esc/Desktop/2026-hackathon/Solar Teacher Low-Code/frontend"
```

## 간단한 웹 서버 실행

```bash
python3 -m http.server 3010
```

## 브라우저에서 열기

```text
http://localhost:3010
```

## 화면에서 확인할 것

- n8n Webhook URL이 `http://localhost:5678/webhook/solar-teacher/analyze`인지 확인합니다.
- 참고자료를 넣을 수 있는 칸이 있는지 확인합니다.
- 텍스트와 이미지/PDF 모드를 선택할 수 있는지 확인합니다.

:::tip
프론트 서버를 끄려면 터미널에서 `Control + C`를 누릅니다.
:::
