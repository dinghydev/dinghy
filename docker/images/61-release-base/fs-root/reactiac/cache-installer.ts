// deno run -A docker/images/61-release-base/fs-root/reactiac/cache-installer.ts
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

const workspacePackages: Record<string, string> = {};
for (const folder of ["core", "cli"]) {
  const allPackages = Object.keys(
    JSON.parse(Deno.readTextFileSync(`${folder}/deno.lock`)).specifiers,
  );
  const unlockedPackages = allPackages.filter((p) => p.includes("@*"));
  if (unlockedPackages.length > 0) {
    console.warn(`Unlocked packages found ${unlockedPackages.join(", ")}`);
    // throw new Error(`Unlocked packages found ${unlockedPackages.join(', ')}`)
  }

  const packages = allPackages
    .filter((p) => !p.includes("@*"))
    .map((p) => [p.substring(p.indexOf(":") + 1, p.lastIndexOf("@")), p]);
  packages.map(([name, spec]) => {
    const specifier = spec.replaceAll("\^", "");
    if (workspacePackages[name] && workspacePackages[name] !== specifier) {
      throw new Error(
        `Package ${name} has conflicting specifier ${
          workspacePackages[name]
        } and ${folder}:${specifier}`,
      );
    }
    workspacePackages[name] = specifier;
  });

  Deno.writeTextFileSync(
    `${folder}/packages-to-cache.ts`,
    `
  ${
      packages.map((p) =>
        `import * as ${p[0].replaceAll(/[^a-zA-Z0-9]/g, "")} from '${p[0]}'`
      ).join("\n")
    }
  `,
  );
  Deno.writeTextFileSync(
    "deno.jsonc",
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
  ${packages.map((p) => `"${p[0]}": "${p[1]}"`).join(",\n")}
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

let workspaceJsonc = Deno.readTextFileSync("workspace/deno.jsonc").trim();
const workspacePackageOnlyJsonc = `{
  "imports": {
    ${
  Object.entries(workspacePackages).map(([name, spec]) =>
    `"${name}": "${spec}"`
  )
    .join(",\n")
}
  }
}
`;
Deno.writeTextFileSync("workspace/deno.jsonc", workspacePackageOnlyJsonc);
await runCwdCommand("workspace", [
  "install",
]);

workspaceJsonc = workspaceJsonc.substring(
  0,
  workspaceJsonc.lastIndexOf('"imports"'),
);
workspaceJsonc += `
  "imports": {
    ${
  Object.entries(workspacePackages).map(([name, spec]) =>
    `"${name}": "${spec}"`
  )
    .join(",\n")
}
  }
}
`;
Deno.writeTextFileSync("workspace/deno.jsonc", workspaceJsonc);
