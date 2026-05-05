---
title: n8n이 열리지 않을 때
---

# n8n이 열리지 않을 때

n8n 주소는 아래와 같습니다.

```text
http://localhost:5678
```

## 1. Docker Desktop 확인

Docker Desktop이 실행 중인지 확인합니다.

꺼져 있다면 Docker Desktop을 먼저 실행합니다.

## 2. n8n 다시 실행

실습 폴더로 이동합니다.

```bash
cd "/Users/esc/Desktop/2026-hackathon/Solar Teacher Low-Code"
```

n8n을 실행합니다.

```bash
docker compose up -d
```

## 3. 포트가 겹칠 때

이미 다른 프로그램이 5678번 포트를 쓰고 있으면 n8n이 열리지 않을 수 있습니다.

이 경우 강사에게 문의하세요.

:::tip
대부분의 경우 Docker Desktop을 켜고 `docker compose up -d`를 다시 실행하면 해결됩니다.
:::
