import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import * as fs from "fs";

const siteConfigJson = process.env.SITE_CONFIG_JSON
  ? JSON.parse(process.env.SITE_CONFIG_JSON)
  : {};

let { docs, blog, theme, themeConfig, ...siteConfig } = siteConfigJson;
if (fs.existsSync("./docs") || fs.existsSync("./src/docs")) {
  docs = docs || {};
  if (fs.existsSync("./src/docs")) {
    docs.path ??= "src/docs";
    docs.routeBasePath ??= "/";
  }
}
if (docs && fs.existsSync("./sidebars.ts")) {
  docs.sidebarPath ??= "./sidebars.ts";
}
if (!docs) {
  docs = false;
}

if (fs.existsSync("./blog") || fs.existsSync("./src/blog")) {
  blog = {
    showReadingTime: true,
    feedOptions: {
      type: ["rss", "atom"],
      xslt: true,
    },
    // Please change this to your repo.
    // Remove this to remove the "edit this page" links.
    // editUrl:
    // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
    // Useful options to enforce blogging best practices
    onInlineTags: "warn",
    onInlineAuthors: "warn",
    onUntruncatedBlogPosts: "warn",
    ...(blog || {}),
  };
  if (fs.existsSync("./src/blog")) {
    (blog as Preset.BlogOptions).path ??= "src/blog";
    (blog as Preset.BlogOptions).routeBasePath ??= "/";
  }
}
if (!blog) {
  blog = false;
}

theme = theme || {};
if (fs.existsSync("./src/css/custom.css")) {
  theme.customCss ??= "./src/css/custom.css";
}

themeConfig = {
  navbar: {
    title: "My Site",
    logo: {
      alt: "My Site Logo",
      src: "img/logo.svg",
    },
    items: [
      {
        type: "docSidebar",
        sidebarId: "tutorialSidebar",
        position: "left",
        label: "Tutorial",
      },
      { to: "/blog", label: "Blog", position: "left" },
      {
        href: "https://github.com/facebook/docusaurus",
        label: "GitHub",
        position: "right",
      },
    ],
  },
  footer: {
    style: "dark",
    links: [
      {
        title: "Docs",
        items: [
          {
            label: "Tutorial",
            to: "/docs/intro",
          },
        ],
      },
      {
        title: "Community",
        items: [
          {
            label: "Stack Overflow",
            href: "https://stackoverflow.com/questions/tagged/docusaurus",
          },
          {
            label: "Discord",
            href: "https://discordapp.com/invite/docusaurus",
          },
          {
            label: "X",
            href: "https://x.com/docusaurus",
          },
        ],
      },
      {
        title: "More",
        items: [
          {
            label: "Blog",
            to: "/blog",
          },
          {
            label: "GitHub",
            href: "https://github.com/facebook/docusaurus",
          },
        ],
      },
    ],
    copyright: `Copyright © ${
      new Date().getFullYear()
    } My Project, Inc. Built with Docusaurus.`,
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
  ...(themeConfig || {}),
};

const config: Config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs,
        blog,
        theme,
      } satisfies Preset.Options,
    ],
  ],
  themeConfig,
  ...siteConfig,
};

export default config;
