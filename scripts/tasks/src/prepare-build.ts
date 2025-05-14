import { projectRoot } from "../../../standalone/cli/src/utils/projectRoot.ts";
import { updateReleaseVersion } from "./version-release.ts";
const copyProjectFile = (src: string, target: string) => {
  Deno.copyFileSync(`${projectRoot}/${src}`, `${projectRoot}/${target}`);
  console.log(`Copied ${src} to ${target}`);
};

if (import.meta.main) {
  updateReleaseVersion();
  Deno.mkdirSync(`${projectRoot}/docker/dependencies/fs-root/reactiac/locks`, {
    recursive: true,
  });
  copyProjectFile(
    "deno.lock",
    "docker/dependencies/fs-root/reactiac/locks/deno.lock",
  );
  copyProjectFile(
    "standalone/deno.lock",
    "docker/dependencies/fs-root/reactiac/locks/standalone-deno.lock",
  );
}
