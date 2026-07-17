import {
  cmdCapture,
  DinghyError,
  getRenderOptions,
  hostAppHome,
  Shape,
  toId,
} from '@dinghy/base-components'
import { existsSync } from '@std/fs/exists'
import {
  AwsCloudfrontFunction,
  useAwsCloudfrontFunction,
} from '@dinghy/tf-aws/serviceCloudfront'

const sourcesFolder = `${hostAppHome}/src/cloudfront-functions`

// CloudFront Functions must be plain scripts: a literal top-level
// `function handler(event) {...}`, no import/export syntax. `deno bundle`
// tree-shakes an unexported top-level declaration entirely, so the source
// must export it (`export function handler`) to survive bundling — but the
// minifier then renames the function and appends an `export{...}` tail that
// CloudFront's runtime can't parse. So: require the export (fail fast if
// missing), bundle as-is, then strip that trailing export back out and
// restore the literal `handler` name in the bundled output.
function resolveCode(name: string): string {
  const jsPath = `${sourcesFolder}/${name}.js`
  if (existsSync(jsPath)) {
    return Deno.readTextFileSync(jsPath)
  }
  const tsPath = `${sourcesFolder}/${name}.ts`
  if (!existsSync(tsPath)) {
    throw new DinghyError(
      `CloudFront function source not found at ${jsPath} or ${tsPath}`,
    )
  }
  const source = Deno.readTextFileSync(tsPath)
  if (!/^export\s+function\s+handler\b/m.test(source)) {
    throw new DinghyError(
      `CloudFront function ${name}.ts must declare "export function ` +
        `handler(event) {...}" at the top level — deno bundle tree-shakes ` +
        `an unexported handler entirely.`,
    )
  }

  const outputFolder =
    `${getRenderOptions().outputFolder}/cloudfront-functions/${name}`
  Deno.mkdirSync(outputFolder, { recursive: true })
  const bundlePath = `${outputFolder}/index.js`
  cmdCapture(
    [
      'deno',
      'bundle',
      '--no-config',
      '--minify',
      '--output',
      bundlePath,
      tsPath,
    ],
    true,
    undefined,
    true,
  )

  let code = Deno.readTextFileSync(bundlePath)
  const exportMatch = code.match(
    /export\s*\{\s*(\w+)(?:\s+as\s+handler)?\s*\}\s*;?\s*$/,
  )
  if (!exportMatch) {
    throw new DinghyError(
      `CloudFront function ${name}.ts: expected the bundled output to end ` +
        `with an "export { ... as handler }" statement, but none was ` +
        `found. Bundled code was:\n${code}`,
    )
  }
  const [exportStatement, innerName] = exportMatch
  code = code.slice(0, code.length - exportStatement.length).trimEnd()
  if (innerName !== 'handler') {
    const declaration = `function ${innerName}(`
    if (!code.includes(declaration)) {
      throw new DinghyError(
        `CloudFront function ${name}.ts: expected to find "${declaration}" ` +
          `in the bundled output to restore the "handler" name, but it ` +
          `was not found. The minifier's output shape may have changed ` +
          `(e.g. an arrow function instead of a function declaration) — ` +
          `bundled code was:\n${code}`,
      )
    }
    code = code.replace(declaration, 'function handler(')
  }
  return `${code}\n`
}

export function cloudfrontFunctionResourceId(siteTitle: string, name: string) {
  return toId(`${siteTitle}_${name}_cffn`)
}

export function CloudfrontFunctionsLoader(
  { siteTitle, names }: { siteTitle: string; names: string[] },
) {
  return (
    <Shape _display='none' _direction='vertical'>
      {names.map((name) => {
        const id = cloudfrontFunctionResourceId(siteTitle, name)
        return (
          <AwsCloudfrontFunction
            key={name}
            _id={id}
            name={id}
            runtime='cloudfront-js-2.0'
            code={resolveCode(name)}
            publish
            lifecycle={{ ignore_changes: ['name'] }}
          />
        )
      })}
    </Shape>
  )
}

export const useCloudfrontFunctionByName = (
  siteTitle: string,
  name: string,
) => useAwsCloudfrontFunction(cloudfrontFunctionResourceId(siteTitle, name))
