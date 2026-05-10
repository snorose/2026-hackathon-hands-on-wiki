---
title: "n8n 실행하기: NPX와 Docker Compose"
---

# n8n 실행하기: NPX와 Docker Compose

n8n은 두 가지 방법으로 실행할 수 있습니다.

| 방법 | 실행 명령어 | 특징 |
| --- | --- | --- |
| NPX | `npx n8n` | 초보자에게 추천합니다. Node.js만 있으면 빠르게 실행할 수 있습니다. |
| Docker Compose | `docker compose up -d` | Docker에 익숙한 사용자에게 추천합니다. 실습 폴더의 설정을 그대로 읽어 안정적으로 실행합니다. |

둘 중 하나만 실행하세요. 두 방법을 동시에 켜면 둘 다 `5678` 포트를 쓰려고 해서 충돌할 수 있습니다.

## 실습 폴더로 이동하기

```bash
cd "/Users/esc/Desktop/2026-hackathon/2026-hackathon-hands-on"
```

## 방법 A: NPX로 실행하기

초보자라면 이 방법을 먼저 선택하세요.

```bash
node --version
npm --version
```

macOS 또는 Linux:

```bash
set -a
source .env
set +a
N8N_PAYLOAD_SIZE_MAX=32 npx n8n
```

Windows PowerShell:

```powershell
Get-Content .env | ForEach-Object {
  if ($_ -match '^\s*([^#][^=]+)=(.*)$') {
    [Environment]::SetEnvironmentVariable($matches[1].Trim(), $matches[2].Trim(), 'Process')
  }
}
$env:N8N_PAYLOAD_SIZE_MAX="32"
npx n8n
```

## 방법 B: Docker Compose로 실행하기

Docker Desktop과 컨테이너 사용에 익숙하다면 이 방법을 선택하세요.

```bash
docker --version
docker compose version
docker compose up -d
```

Docker Compose 방식은 `.env` 파일을 자동으로 읽습니다.

## n8n 접속

브라우저에서 아래 주소를 엽니다.

```text
http://localhost:5678
```

처음 접속하면 이름, 이메일, 비밀번호를 입력해 관리자 계정을 만듭니다.

## 무료 커뮤니티 라이선스 활성화

n8n은 자체 호스팅 커뮤니티 에디션에서 일부 추가 기능을 무료 라이선스로 열 수 있습니다.

1. n8n 왼쪽 아래 메뉴에서 `Settings`를 엽니다.
2. `Usage and plan`으로 이동합니다.
3. `Unlock` 또는 `Enter activation key`를 선택합니다.
4. 이메일로 받은 라이선스 키를 입력합니다.

실습을 바로 진행하는 데 필수는 아니지만, 이후 폴더 관리나 디버깅 기능을 써 보고 싶다면 활성화해 두면 좋습니다.

## `.env`를 바꿨다면

NPX 방식에서는 실행 중인 터미널에서 `Ctrl + C`로 n8n을 끄고, `.env`를 다시 불러온 뒤 `npx n8n`을 실행합니다.

Docker Compose 방식에서는 아래 명령어를 실행합니다.

```bash
docker compose up -d --force-recreate
```

이 명령어는 n8n 컨테이너를 다시 만들어 새 설정을 읽게 합니다.
