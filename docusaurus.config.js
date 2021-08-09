const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import("@docusaurus/types").DocusaurusConfig} */
module.exports = {
  title: "15 Puzzle Online",
  url: "https://multiplayer-15puzzle.github.io/15puzzle-online-doc/",
  baseUrl: "/15puzzle-online-doc/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  organizationName: "multiplayer-15puzzle",
  projectName: "15puzzle-online-doc",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: "15 Puzzle Online",
      logo: {
        alt: "15 Puzzle Online Logo",
        src: "img/logo.svg",
      },
      items: [
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
            "https://github.com/multiplayer-15puzzle/15puzzle-online-doc/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
