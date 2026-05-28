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
  return Deno.readTextFileSync(bundlePath)
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
