---
title: 폴더 구조 이해하기
---

# 폴더 구조 이해하기

실습 폴더는 작은 AI 서비스 하나를 실행하기 위한 파일들로 구성되어 있습니다.

```text
2026-hackathon-hands-on/
  docker-compose.yml
  .env.example
  frontend/
  workflows/
  references/
  n8n_data/
```

## 중요한 폴더와 파일

| 이름 | 역할 |
| --- | --- |
| `docker-compose.yml` | n8n을 Docker로 실행하는 설정 파일입니다. |
| `.env.example` | 환경변수 예시 파일입니다. |
| `.env` | 실제 API Key를 넣는 파일입니다. 직접 만들어야 합니다. |
| `frontend/` | 사용자가 보는 웹 화면입니다. |
| `workflows/` | n8n에 가져올 워크플로우 JSON 파일이 들어 있습니다. |
| `references/` | Pseudo-RAG에 넣어 볼 참고자료 텍스트가 들어갑니다. |
| `n8n_data/` | n8n이 내부적으로 쓰는 데이터 폴더입니다. |

## 별도 백엔드는 없습니다

일반적인 웹 서비스는 프론트엔드와 백엔드가 따로 있을 수 있습니다.

이번 실습에서는 백엔드를 따로 실행하지 않습니다. n8n이 백엔드처럼 요청을 받고, OCR과 AI 호출을 처리합니다.

```mermaid
flowchart LR
    subgraph classic["일반 웹 서비스"]
        direction LR
        user1["사용자"] --> frontend1["프론트엔드<br/>(화면)"]
        frontend1 --> backend1["백엔드 서버<br/>(API/비즈니스 로직)"]
        backend1 --> database1[("데이터베이스")]
        backend1 --> api1["외부 API"]
    end

    subgraph practice["이번 실습"]
        direction LR
        user2["사용자"] --> frontend2["프론트엔드<br/>(index.html / app.js)"]
        frontend2 --> webhook2["n8n Webhook"]
        webhook2 --> workflow2["n8n 워크플로우<br/>(OCR / Pseudo-RAG / AI 호출)"]
        workflow2 --> reference2["references/<br/>참고자료 텍스트"]
        workflow2 --> api2["Upstage API"]
        workflow2 --> result2["결과 JSON"]
        result2 --> frontend2
    end
```
