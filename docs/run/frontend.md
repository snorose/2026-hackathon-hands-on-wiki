---
title: 프론트 화면 실행하기
---

# 프론트 화면 실행하기

프론트 화면은 `frontend/` 폴더에 들어 있습니다.

macOS 또는 Linux:

```bash
cd "$HOME/Desktop/2026-hackathon/2026-hackathon-hands-on/frontend"
python3 -m http.server 3010
```

Windows PowerShell:

```powershell
cd "$HOME\Desktop\2026-hackathon\2026-hackathon-hands-on\frontend"
py -m http.server 3010
```

브라우저에서 아래 주소를 엽니다.

```text
http://localhost:3010
```

## 화면에서 확인할 것

- n8n Webhook URL이 `http://localhost:5678/webhook/solar-teacher/analyze`인지 확인합니다.
- 참고자료를 넣을 수 있는 칸이 있는지 확인합니다.
- 텍스트와 이미지/PDF 모드를 선택할 수 있는지 확인합니다.
