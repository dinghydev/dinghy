import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export const isRewritable = (url: string) => {
  return url?.endsWith("/rewrite-url");
};

export const rewriteUrl = (href: string, label: string) => {
  if (isRewritable(href)) {
    const { siteConfig } = useDocusaurusContext();
    href = siteConfig.url + label.replaceAll(" ", "-").toLowerCase();
    const labelParts = label.split("/");
    label = labelParts[labelParts.length - 1] ||
      labelParts[labelParts.length - 2];
  }
  return { href, label };
};
