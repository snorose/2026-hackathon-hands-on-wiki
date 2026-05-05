---
title: 실습 폴더 준비하기
---

# 실습 폴더 준비하기

실습 코드는 `Solar Teacher Low-Code` 폴더에 있습니다.

## 폴더 위치

이 문서에서는 아래 위치를 기준으로 설명합니다.

```text
/Users/esc/Desktop/2026-hackathon/Solar Teacher Low-Code
```

다른 위치에 폴더를 두었다면 명령어의 경로만 내 컴퓨터에 맞게 바꾸면 됩니다.

## 폴더로 이동하기

터미널에서 아래 명령어를 실행합니다.

```bash
cd "/Users/esc/Desktop/2026-hackathon/Solar Teacher Low-Code"
```

## 폴더 안에 있어야 하는 것

```text
Solar Teacher Low-Code/
  docker-compose.yml
  .env.example
  frontend/
  workflows/
  references/
```

`n8n_data/` 폴더는 n8n을 실행하면 자동으로 생길 수 있습니다.

:::tip
처음에는 `n8n_data/`가 없어도 괜찮습니다.
:::
