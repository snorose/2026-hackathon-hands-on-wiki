---
title: 프론트가 열리지 않을 때
---

# 프론트가 열리지 않을 때

프론트 주소는 아래와 같습니다.

```text
http://localhost:3010
```

## 프론트 서버 실행 확인

프론트 폴더로 이동합니다.

```bash
cd "2026-hackathon-hands-on/frontend"
```

서버를 실행합니다.

```bash
python3 -m http.server 3010
```

터미널에 서버가 실행 중이라는 메시지가 나오면 브라우저에서 주소를 엽니다.

## 이미 포트가 사용 중일 때

이미 3010 포트를 쓰고 있다면 다음과 같은 메시지가 나올 수 있습니다.

```text
Address already in use
```

이 경우 이미 프론트 서버가 켜져 있을 수 있습니다. 브라우저에서 `http://localhost:3010`을 열어 보세요.
