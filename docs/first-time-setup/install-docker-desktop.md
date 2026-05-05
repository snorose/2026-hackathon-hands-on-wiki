---
title: Docker Desktop 설치하기
---

# Docker Desktop 설치하기

Docker Desktop은 n8n을 쉽게 실행하기 위해 필요합니다.

Docker를 아주 쉽게 말하면, **프로그램을 실행하는 작은 상자**입니다. 우리 컴퓨터에 n8n을 직접 복잡하게 설치하지 않고, n8n이 들어 있는 상자를 실행합니다.

## 설치 순서

1. Docker Desktop 공식 사이트에 접속합니다.
2. 내 운영체제에 맞는 Docker Desktop을 다운로드합니다.
3. 설치 파일을 실행합니다.
4. 설치가 끝나면 Docker Desktop을 실행합니다.
5. 화면 상단 또는 작업 표시줄에서 Docker가 실행 중인지 확인합니다.

## 설치 확인

터미널에서 아래 명령어를 실행합니다.

```bash
docker --version
```

버전이 출력되면 Docker 명령어를 사용할 수 있는 상태입니다.

```text
Docker version ...
```

## Docker Desktop이 켜져 있어야 합니다

n8n을 실행하려면 Docker Desktop이 켜져 있어야 합니다.

Docker Desktop이 꺼져 있으면 `docker compose up -d` 명령어가 실패할 수 있습니다.

:::warning
학교나 기관 컴퓨터에서는 Docker Desktop 설치 권한이 없을 수 있습니다. 이 경우 강사가 미리 설치된 환경을 준비해야 합니다.
:::
