import { parse } from "@std/jsonc";
import { projectRoot } from "../../../../standalone/cli/src/utils/projectRoot.ts";

export async function forEachWorkspace(
  callback: (
    name: string,
    srcPath: string,
    targetPath: string,
    denoJsonc: any,
  ) => Promise<void>,
) {
  const npmDir = `${projectRoot}/build/npm`;
  const denoJson = parse(Deno.readTextFileSync(`${projectRoot}/deno.jsonc`));
  for (const workspace of denoJson.workspace) {
    const srcPath = `${projectRoot}/${workspace}`;
    const denoJsonc = parse(Deno.readTextFileSync(`${srcPath}/deno.jsonc`));
    const name = denoJsonc.name;
    const targetPath = `${npmDir}/${name.split("/").pop()}`;
    if (name === "@reactiac/workspace") {
      continue;
    }
    await callback(name, srcPath, targetPath, denoJsonc);
  }
}
