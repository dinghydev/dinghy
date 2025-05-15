import { parse } from "@std/jsonc";
import { projectRoot } from "../../../cli/src/utils/projectRoot.ts";

export async function forEachWorkspace(
  callback: (
    name: string,
    srcPath: string,
    targetPath: string,
    denoJsonc: any,
  ) => Promise<void>,
) {
  const npmDir = `${projectRoot}/build/npm`;
  const denoJson = parse(
    Deno.readTextFileSync(`${projectRoot}/core/deno.jsonc`),
  );
  for (const workspace of denoJson.workspace) {
    const srcPath = `${projectRoot}/core/${workspace}`;
    const denoJsonc = parse(
      Deno.readTextFileSync(`${srcPath}/deno.jsonc`),
    );
    const name = denoJsonc.name;
    const targetPath = `${npmDir}/${name.split("/").pop()}`;
    await callback(name, srcPath, targetPath, denoJsonc);
  }
}
