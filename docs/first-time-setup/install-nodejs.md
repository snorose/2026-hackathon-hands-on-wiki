---
title: Node.js 설치 확인하기
---

# Node.js 설치 확인하기

NPX 방식으로 n8n을 실행하려면 Node.js와 npm이 필요합니다.

## 설치되어 있는지 확인하기

macOS, Linux, Windows PowerShell 모두:

```text
node --version
npm --version
```

아래처럼 버전이 나오면 설치되어 있는 상태입니다.

```text
v20.19.0
10.8.2
```

현재 n8n 공식 문서 기준으로 Node.js `20.19` 이상, `24.x` 이하 버전이 필요합니다.

## 설치되어 있지 않다면

1. 브라우저에서 `https://nodejs.org/ko/download`에 접속합니다.
2. LTS 버전을 다운로드합니다.
3. 설치 파일을 실행합니다.
4. 설치가 끝나면 터미널을 새로 엽니다.
5. `node --version`과 `npm --version`을 다시 확인합니다.
