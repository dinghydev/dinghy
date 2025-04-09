import { projectRoot } from "../../../standalone/cli/src/utils/projectRoot.ts";
import { commitVersion } from "../../../standalone/cli/src/utils/commitVersion.ts";

import { execa } from "execa";

const updateLocalLatestVersion = () => {
  const version = commitVersion(projectRoot);
  const versionFile = `${
    Deno.env.get("HOME")
  }/.reactiac/states/latest-version.json`;
  const latestVersions = JSON.parse(Deno.readTextFileSync(versionFile));
  latestVersions.latest = version;
  Deno.writeTextFileSync(versionFile, JSON.stringify(latestVersions, null, 2));
  console.log(`Updated ${version} to ${versionFile}`);
};

if (import.meta.main) {
  await execa({
    stderr: "inherit",
    stdout: "inherit",
    input: `
      set -e
      deno task docker-build-arm64
      deno task cli-build-aarch64-apple-darwin
      cp ../../build/cli/aarch64-apple-darwin/reactiac ~/.reactiac/bin/
      reactiac -h
    `,
  })`sh`;
  updateLocalLatestVersion();
}
