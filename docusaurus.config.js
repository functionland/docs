// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  deploymentBranch: "main",
  title: "Functionland",
  tagline: "",
  url: "https://functionland.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.webp",
  organizationName: "functionland",
  projectName: "functionland.github.io",
  trailingSlash: false,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "fxblox-web-app",
        content:
          'FxBlox is now set up from your browser. <a target="_blank" rel="noopener" href="https://docs.fx.land/fxblox-web/">Open the web app</a> — the Android and iOS apps are being discontinued.',
        isCloseable: true,
      },
      navbar: {
        title: "Functionland",
        logo: {
          alt: "functionland logo",
          src: "img/logo.webp",
        },
        items: [
          {
            href: "https://docs.fx.land/fxblox-web/",
            label: "Web App",
            position: "right",
          },
          {
            href: "https://github.com/functionland",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
