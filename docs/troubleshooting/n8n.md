---
title: n8n이 열리지 않을 때
---

# n8n이 열리지 않을 때

n8n 주소는 아래와 같습니다.

```text
http://localhost:5678
```

## 어떤 방식으로 실행했는지 확인

| 실행 방식 | 확인할 것 |
| --- | --- |
| NPX | `npx n8n`을 실행한 터미널이 아직 켜져 있는지 확인합니다. |
| Docker Compose | Docker Desktop이 실행 중인지 확인합니다. |

둘 중 하나만 실행해야 합니다. 두 방식이 동시에 `5678` 포트를 사용하면 충돌할 수 있습니다.

## 포트가 겹칠 때

macOS 또는 Linux:

```bash
lsof -i :5678
```

Windows PowerShell:

```powershell
Get-NetTCPConnection -LocalPort 5678
```

다른 포트로 실행하려면 아래처럼 실행합니다.

macOS, Linux, Windows PowerShell 모두:

```text
npx n8n --port=8080
```
