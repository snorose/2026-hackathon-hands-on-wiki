---
title: Docker Desktop 설치하기
---

# Docker Desktop 설치하기

Docker Desktop은 Docker Compose 방식으로 n8n을 실행할 때 필요합니다.

Docker를 아주 쉽게 말하면, **프로그램을 실행하는 작은 상자**입니다. 우리 컴퓨터에 n8n 실행 환경을 직접 복잡하게 설치하지 않고, n8n이 들어 있는 상자를 실행합니다.

## 설치하기

1. Docker Desktop 공식 사이트에 접속합니다.
2. 내 운영체제에 맞는 Docker Desktop을 다운로드합니다.
3. 설치 파일을 실행합니다.
4. 설치가 끝나면 Docker Desktop을 실행합니다.
5. 화면 상단 또는 작업 표시줄에서 Docker가 실행 중인지 확인합니다.

## 설치 확인

```bash
docker --version
docker compose version
```

NPX 방식으로만 실습한다면 Docker Desktop은 필요하지 않습니다. 초보자는 먼저 Node.js 설치 후 NPX 방식으로 시작하고, Docker에 익숙하거나 환경을 분리해서 관리하고 싶을 때 Docker Desktop을 준비하면 됩니다.
