---
title: n8n 실행하기
---

# n8n 실행하기

n8n은 Docker로 실행합니다.

## 실습 폴더로 이동하기

```bash
cd "/Users/esc/Desktop/2026-hackathon/Solar Teacher Low-Code"
```

## n8n 실행

```bash
docker compose up -d
```

`-d`는 백그라운드에서 실행하라는 뜻입니다. 터미널을 계속 붙잡아 두지 않고 뒤에서 실행하게 합니다.

## n8n 접속

브라우저에서 아래 주소를 엽니다.

```text
http://localhost:5678
```

처음 접속하면 n8n 계정을 만드는 화면이 나올 수 있습니다. 로컬 실습용 계정을 만들면 됩니다.

## `.env`를 바꿨다면

API Key를 바꿨거나 `.env`를 수정했다면 아래 명령어를 실행합니다.

```bash
docker compose up -d --force-recreate
```

이 명령어는 n8n 컨테이너를 다시 만들어 새 설정을 읽게 합니다.
