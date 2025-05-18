import { existsSync } from "jsr:@std/fs";
import { projectRoot } from "./projectRoot.ts";
import { commitVersion } from "./commitVersion.ts";

const versions = {};

function lazyLoad(): Record<string, string> {
  if (!versions["release"]) {
    const versionFile = `${projectRoot}/.versions.json`;
    if (existsSync(versionFile)) {
      const loadedVersions = JSON.parse(
        Deno.readTextFileSync(versionFile).trim(),
      );
      Object.entries(loadedVersions).forEach(([key, value]) => {
        versions[key] = value;
      });
    } else {
      versions["release"] = commitVersion(projectRoot);
    }
  }
  return versions;
}

export const projectVersionTf = () => lazyLoad().tf || "tf";
export const projectVersionDrawio = () => lazyLoad().drawio || "drawio";
export const projectVersionRelease = () => lazyLoad().release;
