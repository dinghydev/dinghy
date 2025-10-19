import * as fs from "fs";

export default function editUrl(
  version: {
    docPath: string;
    versionDocsDirPath: string;
  },
  versionDocsDirPath: string,
  docPath: string,
  permalink: string,
  locale: string,
  defaultEditUrl: string,
): string | undefined {
  const filePath: string = version.versionDocsDirPath + "/" + version.docPath;
  const content: string = fs.readFileSync(filePath, "utf-8");
  const lines: string[] = content.split(/\r?\n/);
  let configuredEditUrl: string | undefined = undefined;
  lines.map((line) => {
    const match = line.match(/^\s*edit_url:\s*(\S+)\s*$/);
    if (match) {
      configuredEditUrl = match[1];
    }
  });
  if (configuredEditUrl) {
    if (configuredEditUrl === "none") {
      return undefined;
    } else {
      return configuredEditUrl;
    }
  } else {
    return defaultEditUrl + filePath;
  }
}
