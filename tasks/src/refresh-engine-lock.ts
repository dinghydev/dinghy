import { parse } from "@std/jsonc";
import { execa } from "execa";
import { projectRoot } from "../../cli/src/utils/projectRoot.ts";

function readProjectsImport() {
  const readProjectJsonc = (projectName: string): any => {
    const denoJsonc = parse(
      Deno.readTextFileSync(`${projectRoot}/${projectName}/deno.jsonc`),
    );
    return denoJsonc;
  };

  const projectImports = {} as any;
  for (const project of ["core", "cli"]) {
    const projectJsonc = readProjectJsonc(project);
    for (const [key, value] of Object.entries(projectJsonc.imports as any)) {
      projectImports[key] = value;
    }
  }
  const sortedImports = Object.fromEntries(
    Object.entries(projectImports).sort(([a], [b]) => a.localeCompare(b)),
  );
  return sortedImports;
}

const projectDependencies = readProjectsImport();
function parseDependency(line: string) {
  const dependency = parse(`{${line}}`) as any;
  const [key, value] = Object.entries(dependency)[0];
  return { key, value };
}

console.log("project dependencies", projectDependencies);

// engineJsonc.imports = { ...engineJsonc.imports, ...readProjectsImport() };

const engineJsoncFile = `${projectRoot}/engine/deno.jsonc`;
const engineJsoncSrc = Deno.readTextFileSync(engineJsoncFile).split("\n");
const engineJsoncTarget = [];
let isEngineOnlyDependencies = false;
let isProjectsDependencies = false;
const engineDependencies = {} as any;
for (const line of engineJsoncSrc) {
  const isEmptyLine = !line.trim();
  if (!isProjectsDependencies || isEmptyLine) {
    engineJsoncTarget.push(line);
  }
  if (isEmptyLine) {
    continue;
  }
  if (line.includes("ENGINE ONLY DEPENDENCIES")) {
    isEngineOnlyDependencies = true;
    continue;
  }
  if (line.includes("CLI AND CORE DEPENDENCIES")) {
    isProjectsDependencies = true;
    isEngineOnlyDependencies = false;
    Object.entries(projectDependencies).map(([key, value]) => {
      if (!engineDependencies[key]) {
        engineJsoncTarget.push(`    "${key}": "${value}",`);
      }
    });
    engineJsoncTarget.push("  },");
    continue;
  }
  if (isEngineOnlyDependencies) {
    const dependency = parseDependency(line);
    engineDependencies[dependency.key] = dependency.value;
    continue;
  }
  if (isProjectsDependencies) {
    const isEndingLine = line.includes("}");
    if (isEndingLine) {
      isProjectsDependencies = false;
    }
    continue;
  }
}
console.log("engine only dependencies", engineDependencies);

Deno.writeTextFileSync(engineJsoncFile, engineJsoncTarget.join("\n"));
console.log(`Refreshed engine lock ${engineJsoncFile}`);

console.log("Refreshing engine lock...");
await execa("deno", ["install"], {
  cwd: `${projectRoot}/engine`,
  stdio: "inherit",
});
