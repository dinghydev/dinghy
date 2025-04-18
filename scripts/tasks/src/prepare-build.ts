import { projectRoot } from "../../../standalone/cli/src/utils/projectRoot.ts";
import { updateReleaseVersion } from "./version-release.ts";
const copyProjectFile = (src: string, target: string) => {
  Deno.copyFileSync(`${projectRoot}/${src}`, `${projectRoot}/${target}`);
  console.log(`Copied ${src} to ${target}`);
};

if (import.meta.main) {
  updateReleaseVersion();
  copyProjectFile(
    "standalone/cli/src/utils/stackUtils.ts",
    "base/components/src/utils/stackUtils.ts",
  );
  Deno.mkdirSync(`${projectRoot}/workspace/utils`, { recursive: true });
  copyProjectFile(
    "standalone/cli/src/utils/stackUtils.ts",
    "workspace/utils/stackUtils.ts",
  );
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
    "standalone/cli/src/utils/renderOptions.ts",
    "workspace/utils/renderOptions.ts",
  );
  copyProjectFile(
    "deno.lock",
    "docker/release-base/fs-root/reactiac/deno.lock",
  );
}
