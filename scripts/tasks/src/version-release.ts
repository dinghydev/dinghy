import { projectRoot } from "./utils/projectRoot.ts";
import { commitVersion } from "./utils/commitVersion.ts";

export const updateReleaseVersion = () => {
  const version = commitVersion(projectRoot);
  const versionFile = `${projectRoot}/.version`;
  Deno.writeTextFileSync(versionFile, version);
  console.log(`Wrote ${version} to ${versionFile}`);
};

if (import.meta.main) {
  updateReleaseVersion();
}
