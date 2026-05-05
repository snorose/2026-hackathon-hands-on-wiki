# Solar Teacher Low-Code Hands-on Docs

Docusaurus로 만든 핸즈온 문서입니다. GitHub Pages로 정적 배포합니다.

## GitHub Pages 배포

이 저장소는 GitHub Actions로 Docusaurus 사이트를 빌드하고 GitHub Pages에 배포합니다.

배포 주소:

```text
https://snorose.github.io/2026-hackathon-hands-on/
```

## 배포 방법

1. GitHub 저장소 `Settings > Pages`로 이동합니다.
2. `Build and deployment`의 Source를 `GitHub Actions`로 설정합니다.
3. 변경사항을 `main` 브랜치에 push합니다.
4. `.github/workflows/deploy.yml`이 실행됩니다.
5. Actions가 성공하면 GitHub Pages 주소에서 문서를 볼 수 있습니다.

## 로컬 미리보기

```bash
npm install
npm run start
```

로컬에서 빌드만 확인하려면 아래 명령어를 사용합니다.

```bash
npm run build
```

참가자는 이 과정을 하지 않아도 됩니다. 문서 작성자나 운영자가 배포 전에 확인할 때만 사용합니다.

## 문서 작성 원칙

- 어려운 용어는 먼저 쉬운 말로 풀어 설명합니다.
- 명령어는 복사해서 실행할 수 있게 제공합니다.
- 추후 그림이나 다이어그램이 있으면 좋은 곳에는 `[아키텍처 추가 추천]` 표시를 남깁니다.
