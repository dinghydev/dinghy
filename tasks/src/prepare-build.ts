import { projectRoot } from "../../cli/src/utils/projectRoot.ts";
import { updateReleaseVersion } from "./version-release.ts";
const copyProjectFile = (src: string, target: string) => {
  Deno.copyFileSync(`${projectRoot}/${src}`, `${projectRoot}/${target}`);
  console.log(`Copied ${src} to ${target}`);
};

const copyLockFile = (name: string) => {
  const src = `${name}/deno.lock`;
  const target = `docker/dependencies/fs-root/reactiac/${name}/deno.lock`;
  const folder = `${projectRoot}/docker/dependencies/fs-root/reactiac/${name}`;
  Deno.mkdirSync(folder, {
    recursive: true,
  });
  copyProjectFile(src, target);
};

if (import.meta.main) {
  updateReleaseVersion();
  copyLockFile("core");
  copyLockFile("cli");
  copyLockFile("workspace");
}
