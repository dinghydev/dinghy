// deno run -A docker/images/61-engine-base/fs-root/dinghy/cache-installer.ts

// deno.lock keys look like `<name>@<version>[_<peer>@<peerVer>...]`. Names can
// contain `_` (e.g. `string_decoder`) or `__` (e.g. `@types/sinonjs__fake-timers`),
// so strip peer-dep suffixes by splitting on `_` only after the version `@`.
function stripPeerDeps(spec: string): string {
  const versionAt = spec.indexOf("@", spec.startsWith("@") ? 1 : 0);
  if (versionAt === -1) return spec;
  const peerSep = spec.indexOf("_", versionAt);
  return peerSep === -1 ? spec : spec.substring(0, peerSep);
}

async function runCwdCommand(cwd: string, args: string[]) {
  const command = new Deno.Command(Deno.execPath(), {
    args,
    cwd,
  });

  const { code, stdout, stderr } = await command.output();
  if (code !== 0) {
    console.error(new TextDecoder().decode(stdout));
    console.error(new TextDecoder().decode(stderr));
    throw new Error(`Failed to install dependencies from ${cwd}`);
  }
}

// for (const folder of ["core", "cli"]) {
for (const folder of ["engine"]) {
  const denoLock = JSON.parse(Deno.readTextFileSync(`${folder}/deno.lock`));
  const packages: string[] = [];
  ["npm", "jsr"].forEach((type) => {
    Object.keys(denoLock[type]).forEach((spec) => {
      packages.push(`${type}:${stripPeerDeps(spec)}`);
    });
  });
  console.log({ folder, packages: packages.length });

  const packagesToCacheTsTxt = `
  ${
    packages.map((p) =>
      `import * as ${p.replaceAll(/[^a-zA-Z0-9]/g, "")} from '${p}'`
    ).join("\n")
  }
  `;

  Deno.writeTextFileSync(
    `${folder}/packages-to-cache.ts`,
    packagesToCacheTsTxt,
  );

  console.log(`${folder}/packages-to-cache.ts:`);
  console.log(packagesToCacheTsTxt);

  Deno.writeTextFileSync(
    `${folder}/deno.jsonc`,
    `{
  "compilerOptions": {
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "jsx": "react-jsx",
    "jsxImportSource": "npm:react@^19.0",
    "lib": [
      // to remove when HTMLElement not in use
      "dom",
      "deno.ns"
    ]
  },
  "imports": {
  }
}
  `,
  );

  await runCwdCommand(folder, [
    "install",
    "--entrypoint",
    "packages-to-cache.ts",
    "--lock",
  ]);
}
