import { existsSync } from 'jsr:@std/fs/exists'
import { parse } from 'jsr:@std/yaml'
import { ExampleSchema, ExampleType } from './types.ts'

function findApps(basePath: string[] = [], result: string[] = []) {
  for (
    const dirEntry of Deno.readDirSync(
      `./packages/examples/${basePath.join('/')}`,
    )
  ) {
    if (dirEntry.isDirectory) {
      findApps([...basePath, dirEntry.name], result)
    } else if (dirEntry.isFile && dirEntry.name === 'App.ts') {
      result.push(basePath.join('/'))
    }
  }
  return result
}

function parseExampleSpec(path: string) {
  const appFile = `./packages/examples/${path}/iac.tsx`
  const specFile = `./packages/examples/${path}/example.yaml`
  let spec: ExampleType
  if (existsSync(specFile)) {
    spec = parse(Deno.readTextFileSync(specFile)) as ExampleType
  } else {
    spec = {} as ExampleType
  }
  const example = ExampleSchema.parse(spec) as ExampleType

  example.title ??= path
  example.packagePath = path
  example.outputPath = `./packages/examples/${path}/output`
  example.code = Deno.readTextFileSync(appFile)
    .replace(/from \'.*\/core\/index.ts\'/g, `from 'dinghy-core'`)
    .replace(
      /import.*NodeProps.*types.ts'/,
      `import type { NodeProps } from 'dinghy-core'`,
    )
    .replace(
      /import.*IacNodeProps.*types.ts'/,
      `import { IacNodeProps } from 'dinghy-core'`,
    )
    .replace(
      /..\/..\/..\/generated-drawio\/index.ts/g,
      `dinghy-components-generated-drawio`,
    )
    .replace(
      /..\/..\/..\/..\/provider-drawio\/index.ts/g,
      `dinghy-provider-drawio`,
    )
    .replace(
      /..\/..\/..\/generated-aws\/index.ts/g,
      `dinghy-components-generated-aws`,
    )
    .replace(/..\/..\/..\/pro-aws\/index.ts/g, `dinghy-components-pro-aws`)
    .replace(/\$/g, '\\$')
    .replace(/`/g, '\\`')

  example.title ??= path
  example.slag ??= path
  example.tags ??= example.slag.split('/')
  example.options ??= {
    diagramOptions: {
      dimension: {
        boxWidth: 60,
        boxHeight: 60,
      },
    },
    ...(path.includes('iac')
      ? {
        iacOptions: {
          provider: 'opentofu',
        },
      }
      : {}),
  }
  return example
}

export function generateExamplesSourceCode() {
  const apps = findApps()
    .map(parseExampleSpec)
    .filter(Boolean)
    .sort((a, b) => {
      return `${String(a.order).padStart(5, '0')}${a.title}`.localeCompare(
        `${String(b.order).padStart(5, '0')}${b.title}`,
      )
    })
  const file = `./packages/examples/index.tsx`
  Deno.writeTextFileSync(
    file,
    `// GENERATED FILE: DO NOT EDIT
import { ExampleType } from "./types.ts";
${
      apps
        .filter((app) => !app.exclude)
        .map(
          (example) =>
            `import { default as ${
              example.packagePath!.replace(
                /\W/g,
                '_',
              )
            } } from './${example.packagePath!}/App.ts'\n
        //import ${
              example.packagePath!.replace(
                /\W/g,
                '_',
              )
            }_spec from './${example.packagePath!}/example.yaml'`,
        )
        .join('\n')
    }

export const allExamples: Record<string, ExampleType> = {
${
      apps
        .filter((app) => !app.private)
        .map((example) => {
          return `  '${example.slag}': {
          title: '${example.title}',
          slag: '${example.slag}',
          packagePath: '${example.packagePath}',
          outputPath: '${example.outputPath}',
          order: ${example.order},
          code: \`${example.code}\`,
          //options: ${example.packagePath!.replace(/\W/g, '_')}_spec.options,
          options: ${JSON.stringify(example.options)},
          App: ${example.packagePath!.replace(/\W/g, '_')}
          }`
        })
        .join(',\n')
    },
}
`,
  )
  console.log(`Refreshed all examples: ${file}`)
  return apps
}
