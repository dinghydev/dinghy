const allPackages = Object.keys(
  JSON.parse(Deno.readTextFileSync('deno.lock')).specifiers,
)
const unlockedPackages = allPackages.filter((p) => p.includes('@*'))
if (unlockedPackages.length > 0) {
  console.log(`Unlocked packages found ${unlockedPackages.join(', ')}`)
  // throw new Error(`Unlocked packages found ${unlockedPackages.join(', ')}`)
}

const packages = allPackages
  .filter((p) => !p.includes('@*'))
  .map((p) => [p.substring(p.indexOf(':') + 1, p.lastIndexOf('@')), p])

Deno.writeTextFileSync(
  'packages-to-cache.ts',
  `
  ${packages.map((p) => `import * as ${p[0].replaceAll(/[^a-zA-Z0-9]/g, '')} from '${p[0]}'`).join('\n')}
  `,
)
Deno.writeTextFileSync(
  'deno.jsonc',
  `
  {
  "tasks": {
    "reactiac": "deno run -A src/index.ts",
    "lint": "deno lint"
    "check": "deno fmt --check"
  },
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
  ${packages.map((p) => `"${p[0]}": "${p[1]}"`).join(',\n')}
  },
  "lint": {
    "include": [
      "app/"
    ],
    "rules": {
      "tags": [
        "recommended"
      ],
      "include": [
        "ban-untagged-todo"
      ],
      "exclude": [
        "no-unused-vars"
      ]
    }
  },
  "fmt": {
    "semiColons": false,
    "singleQuote": true,
    "include": [
      "app/"
    ]
  }
}
  `,
)
const reuslt = Deno.run({
  cmd: ['deno', 'install', '--entrypoint', 'packages-to-cache.ts', '--lock'],
})
const status = await reuslt.status()
if (!status.success) {
  console.error(await reuslt.stdout())
  console.error(await reuslt.stderr())
  throw new Error(`Failed to install dependencies`)
}
