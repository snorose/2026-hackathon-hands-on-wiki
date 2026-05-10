---
title: 실행 전 체크리스트
---

# 실행 전 체크리스트

아래 항목을 확인한 뒤 실행 단계로 넘어갑니다.

- n8n 실행 방법을 골랐다.
- NPX 방식이면 Node.js와 npm이 설치되어 있다.
- Docker Compose 방식이면 Docker Desktop이 설치되어 있고 실행 중이다.
- 실습 폴더가 있다.
- 터미널에서 실습 폴더로 이동할 수 있다.
- `.env` 파일을 만들었다.
- `.env` 파일에 `UPSTAGE_API_KEY`를 넣었다.
- `workflows/solar-teacher-hands-on.json` 파일이 있다.
- `frontend/` 폴더가 있다.

## 확인 명령어

```bash
node --version
npm --version
```

Docker Compose 방식이면 아래도 확인합니다.

```bash
docker --version
docker compose version
```
