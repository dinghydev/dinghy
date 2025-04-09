import { projectRoot } from "../../../standalone/cli/src/utils/projectRoot.ts";
import { commitVersion } from "../../../standalone/cli/src/utils/commitVersion.ts";

export const updateReleaseVersion = () => {
  const version = commitVersion(projectRoot);
  const versionFile = `${projectRoot}/.version`;
  Deno.writeTextFileSync(versionFile, version);
  console.log(`Wrote ${version} to ${versionFile}`);
};

if (import.meta.main) {
  updateReleaseVersion();
}
