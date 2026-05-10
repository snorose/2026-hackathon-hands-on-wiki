---
title: n8n 설치 방법 선택하기
---

# n8n 설치 방법 선택하기

이번 핸즈온에서는 두 가지 방법을 모두 실습할 수 있습니다.

| 방식 | 설명 | 추천 상황 |
| --- | --- | --- |
| NPX | Node.js가 n8n을 바로 내려받아 실행합니다. | 초보자가 가장 적은 준비로 시작하고 싶을 때 |
| Docker Compose | n8n을 컨테이너라는 독립된 실행 상자 안에서 실행합니다. | Docker에 익숙하고 실습 환경을 분리해서 관리하고 싶을 때 |

:::tip 추천
처음 n8n을 배우는 분에게는 **Node.js 설치 후 NPX 방식**을 추천합니다. Docker Desktop 설치와 컨테이너 개념이 어렵게 느껴질 수 있기 때문입니다.
:::

## NPX 방식

```bash
npx n8n
```

Node.js와 npm이 설치되어 있으면 n8n을 따로 설치하지 않아도 브라우저에서 n8n을 열 수 있습니다.

공식 n8n 문서 기준으로 현재 n8n은 Node.js `20.19` 이상, `24.x` 이하 버전이 필요합니다.

## Docker Compose 방식

```bash
docker compose up -d
```

Docker Compose는 실습 폴더의 `docker-compose.yml` 파일을 읽고 n8n을 실행합니다. Docker Desktop 설치, 컨테이너, 볼륨 같은 개념이 필요하므로 작업에 어느 정도 익숙한 사용자에게 추천합니다.

:::info localhost:5678
두 방식 모두 기본 접속 주소는 `http://localhost:5678`입니다. `localhost`는 내 컴퓨터 안에서만 접속한다는 뜻입니다.
:::
