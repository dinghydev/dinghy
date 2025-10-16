import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export const isRewritable = (url: string) => {
  return url?.endsWith("/rewrite-url");
};

export const rewriteUrl = (url: string, text: string) => {
  if (isRewritable(url)) {
    const { siteConfig } = useDocusaurusContext();
    const endPath = text.toLowerCase();
    let ending = url.indexOf(endPath) + endPath.length;
    if (url.endsWith(`/${endPath}/rewrite-url`)) {
      ending += 1;
    }
    return siteConfig.url +
      url.substring(
        0,
        ending,
      );
  } else {
    return url;
  }
};
