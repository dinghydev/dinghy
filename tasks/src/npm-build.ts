// https://github.com/denoland/dnt

import { build, emptyDir } from "@deno/dnt";
import { projectVersion } from "../../cli/src/utils/projectVersion.ts";
import { forEachWorkspace } from "./utils/workspace.ts";

forEachWorkspace(async (name, srcPath, targetPath, denoJsonc) => {
  console.log("building", name, srcPath);
  await emptyDir(targetPath);

  const dependencies = {};
  if (name === "@reactiac/workspace") {
    return;
  }
  if (denoJsonc.imports) {
    Object.entries(denoJsonc.imports).map(([k, v]) => {
      const spec = v as string;
      const isWorkspaceDependency = spec.startsWith("workspace:");
      const cName = isWorkspaceDependency
        ? k
        : spec.substring(spec.indexOf(":") + 1, spec.lastIndexOf("@"));
      const cVersion = isWorkspaceDependency
        ? "latest"
        : v.substring(v.lastIndexOf("@") + 1);
      dependencies[cName] = cVersion;
    });
  }

  await build({
    // packageManager: "pnpm",
    typeCheck: false,
    test: false,
    declaration: true,
    scriptModule: false,
    entryPoints: [`${srcPath}/src/index.ts`],
    types: false,
    outDir: targetPath,
    shims: {
      deno: false,
    },
    package: {
      name: name,
      version: projectVersion,
      dependencies,
    },
    postBuild() {
      if (name === "@reactiac/base-renderer") {
        dependencies["@reactiac/base-components"] = projectVersion;
      } else if (name === "@reactiac/renderer-json") {
        dependencies["@reactiac/base-components"] = projectVersion;
        dependencies["@reactiac/base-renderer"] = projectVersion;
      }
      const packageJson = JSON.parse(
        Deno.readTextFileSync(`${targetPath}/package.json`),
      );
      packageJson.dependencies = dependencies;
      delete packageJson._generatedBy;
      packageJson.types = "./esm/index.d.ts";
      Deno.writeTextFileSync(
        `${targetPath}/package.json`,
        JSON.stringify(packageJson, null, 2),
      );
      // steps to run after building and before running the tests
      // Deno.copyFileSync("LICENSE", "npm/LICENSE");
      //   Deno.copyFileSync(
      //     `${workspaceDir}/README.adoc`,
      //     `${npmDir}/${packageName}/README.adoc`,
      //   )
    },
  });
});
