const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import("@docusaurus/types").DocusaurusConfig} */
module.exports = {
  title: "15 Puzzle Online Document",
  url: "https://multiplayer-15puzzle.github.io",
  baseUrl: "/15puzzle-online-doc/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  organizationName: "multiplayer-15puzzle",
  projectName: "15puzzle-online-doc",
  trailingSlash: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
  },
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    navbar: {
      title: "15 Puzzle Online",
      logo: {
        alt: "15 Puzzle Online Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "localeDropdown",
          position: "left",
        },
        {
          href: "https://github.com/multiplayer-15puzzle/15puzzle-online-doc",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        /*{
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/multiplayer-15puzzle/15puzzle-online-doc",
            },
          ],
        },*/
      ],
      copyright: `© ${new Date().getFullYear()} 15 Puzzle Online`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/multiplayer-15puzzle/15puzzle-online-doc/edit/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
