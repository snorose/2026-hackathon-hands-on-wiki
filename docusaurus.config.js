// @ts-check

const config = {
  title: 'Solar Teacher Low-Code Hands-on',
  tagline: '비전공자를 위한 n8n AI 에이전트 실습',
  url: 'https://snorose.github.io',
  baseUrl: '/2026-hackathon-hands-on/',

  organizationName: 'snorose',
  projectName: '2026-hackathon-hands-on',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Solar Teacher Hands-on',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '문서',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} Solar Teacher Low-Code Hands-on.`,
    },
    prism: {
      additionalLanguages: ['bash', 'json'],
    },
  },
};

module.exports = config;
