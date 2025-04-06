import { projectRoot } from "./utils/projectRoot.ts";
import { updateReleaseVersion } from "./version-release.ts";
const copyProjectFile = (src: string, target: string) => {
  Deno.copyFileSync(`${projectRoot}/${src}`, `${projectRoot}/${target}`);
  console.log(`Copied ${src} to ${target}`);
};

if (import.meta.main) {
  updateReleaseVersion();
  copyProjectFile(
    "standalone/cli/src/utils/setupDebug.ts",
    "workspace/utils/setupDebug.ts",
  );
  copyProjectFile(
    "standalone/cli/src/utils/loadConfig.ts",
    "workspace/utils/loadConfig.ts",
  );
  copyProjectFile(
    "standalone/cli/src/utils/parseOptions.ts",
    "workspace/utils/parseOptions.ts",
  );
  copyProjectFile(
    "deno.lock",
    "docker/dependencies/fs-root/reactiac/deno.lock",
  );
}
