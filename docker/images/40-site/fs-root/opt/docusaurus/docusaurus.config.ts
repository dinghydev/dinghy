import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import * as fs from "fs";

const siteConfigJson = process.env.SITE_CONFIG_JSON
  ? JSON.parse(process.env.SITE_CONFIG_JSON)
  : {};

// console.log("siteConfigJson:", JSON.stringify(siteConfigJson, null, 2));

let { docs, blog, theme, svgr, themeConfig, ...siteConfig } = siteConfigJson;
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
  },
  footer: {
    style: "dark",
    copyright: `Copyright © YYYY My Project, Inc. Built with Docusaurus.`,
  },
  colorMode: {
    respectPrefersColorScheme: true,
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
  ...(themeConfig || {}),
};

if (themeConfig.footer === false) {
  delete themeConfig.footer;
} else if (themeConfig.footer?.copyright) {
  themeConfig.footer.copyright = themeConfig.footer?.copyright.replace(
    "YYYY",
    `${new Date().getFullYear()}`,
  );
}

if (svgr === undefined) {
  svgr = { svgrConfig: {} };
}

const config: Config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "assets/img/favicon.ico",
  trailingSlash: false,

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

  onBrokenLinks: "warn",
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
        svgr,
      } satisfies Preset.Options,
    ],
  ],
  themeConfig,
  ...siteConfig,
};

// console.log("Docusaurus config:", JSON.stringify(config, null, 2));

export default config;
