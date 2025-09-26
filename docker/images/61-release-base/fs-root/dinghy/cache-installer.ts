// deno run -A docker/images/61-release-base/fs-root/dinghy/cache-installer.ts
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
      packages.push(`${type}:${spec.split("_")[0]}`);
    });
  });
  console.log({ folder, packages: packages.length });

  Deno.writeTextFileSync(
    `${folder}/packages-to-cache.ts`,
    `
  ${
      packages.map((p) =>
        `import * as ${p.replaceAll(/[^a-zA-Z0-9]/g, "")} from '${p}'`
      ).join("\n")
    }
  `,
  );
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
