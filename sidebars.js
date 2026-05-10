const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '1. 처음 환경 준비하기',
      items: [
        'first-time-setup/overview',
        'first-time-setup/n8n-introduction',
        'first-time-setup/why-docker-n8n',
        'first-time-setup/install-nodejs',
        'first-time-setup/install-docker-desktop',
        'first-time-setup/text-editor',
        'first-time-setup/upstage-api-key',
        'first-time-setup/prepare-folder',
      ],
    },
    {
      type: 'category',
      label: '2. 실습 폴더 이해하기',
      items: [
        'setup/folder-structure',
        'setup/environment',
        'setup/checklist',
      ],
    },
    {
      type: 'category',
      label: '3. 실행하기',
      items: [
        'run/n8n',
        'run/n8n-ui-tour',
        'run/trigger-action-nodes',
        'run/import-workflow',
        'run/frontend',
        'run/first-test',
      ],
    },
    {
      type: 'category',
      label: '4. 개념 이해하기',
      items: [
        'concepts/big-picture',
        'concepts/ai-agent-basics',
      ],
    },
    {
      type: 'category',
      label: '5. RAG-lite',
      items: [
        'rag-lite/what-is-rag',
        'rag-lite/use-reference-text',
        'rag-lite/pdf-to-text',
        'rag-lite/real-rag-vs-rag-lite',
      ],
    },
    {
      type: 'category',
      label: '6. n8n 워크플로우 뜯어보기',
      items: [
        'workflow/overview',
        'workflow/webhook',
        'workflow/normalize-input',
        'workflow/ocr',
        'workflow/prompts',
        'workflow/feedback-and-quiz',
        'workflow/response',
      ],
    },
    {
      type: 'category',
      label: '7. 프론트엔드 화면',
      items: [
        'frontend/why-separate-frontend',
        'frontend/screen',
        'frontend/payload',
      ],
    },
    {
      type: 'category',
      label: '8. 에러 해결하기',
      items: [
        'troubleshooting/n8n',
        'troubleshooting/frontend',
        'troubleshooting/api-key',
        'troubleshooting/upload',
        'troubleshooting/output-format',
      ],
    },
    {
      type: 'category',
      label: '9. 마무리와 확장',
      items: [
        'wrap-up/summary',
        'wrap-up/next-steps',
        'wrap-up/real-service',
      ],
    },
  ],
};

module.exports = sidebars;
