import { existsSync } from "jsr:@std/fs";
import { projectRoot } from "./projectRoot.ts";
import { commitVersion } from "./commitVersion.ts";
import { isInsideContainer } from "./loadConfig.ts";

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

const containerisedVersion = (field: string) => {
  if (!isInsideContainer) {
    throw new Error(`Version ${field} only available in containerised mode`);
  }
  return lazyLoad()[field];
};

export const projectVersionTf = () => containerisedVersion("tf");
export const projectVersionDrawio = () => containerisedVersion("drawio");
export const projectVersionRelease = () => lazyLoad().release;
