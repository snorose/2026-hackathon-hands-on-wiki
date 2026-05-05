---
title: 실행 전 체크리스트
---

# 실행 전 체크리스트

아래 항목을 확인한 뒤 실행 단계로 넘어갑니다.

## 체크리스트

- Docker Desktop이 설치되어 있다.
- Docker Desktop이 실행 중이다.
- 실습 폴더가 있다.
- 터미널에서 실습 폴더로 이동할 수 있다.
- `.env` 파일을 만들었다.
- `.env` 파일에 `UPSTAGE_API_KEY`를 넣었다.
- `workflows/solar-teacher-hands-on.json` 파일이 있다.
- `frontend/` 폴더가 있다.

## 확인 명령어

실습 폴더로 이동합니다.

```bash
cd "/Users/esc/Desktop/2026-hackathon/Solar Teacher Low-Code"
```

Docker가 동작하는지 확인합니다.

```bash
docker --version
```

파일이 있는지 확인합니다.

```bash
ls
```

아래처럼 보이면 좋습니다.

```text
docker-compose.yml
frontend
workflows
references
```
