import { setupDebug } from '../../utils/setupDebug.ts'
import { containerAppHome, loadConfig } from '../../utils/loadConfig.ts'
import { parseOptions } from '../../utils/parseOptions.ts'
import { z } from 'zod'
import Debug from 'debug'
const debug = Debug('tf-generate')
setupDebug()
await loadConfig()

debug('tf generate started at %O', new Date())
const args = parseOptions({}, Deno.args, ['tf', 'generate'])
console.log('args', args)
console.log('containerAppHome', containerAppHome)

const stateJsonFile = args['state-json-file']
const stateJson = JSON.parse(Deno.readTextFileSync(stateJsonFile))

const resources = stateJson.values?.root_module?.resources
if (!resources) {
  console.error('No resources found in the state json file')
  Deno.exit(1)
}
import { namespaceMapping } from '../../../standard-components/tf-aws/src/namespaceMapping.ts'
import { existsSync } from '@std/fs/exists'

console.log(z.string().array().element)

const imports: string[] = []
for (const resource of resources) {
  console.log(`parsing ${resource.address}`)
  const nameParts = resource.type.split('_')
  const componentName = nameParts.map((part) =>
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join('')
  const namespace = nameParts.length > 2
    ? nameParts[1]
    : namespaceMapping[componentName as keyof typeof namespaceMapping]
  if (!namespace) {
    console.warn(
      `Ignore resource ${resource.type} as no namespace mapping found`,
    )
    continue
  }
  imports.push(
    `import { ${componentName} } from '@reactiac/standard-components-tf-aws'`,
  )

  const componentDefinitionFile =
    `../standard-components/tf-aws/src/${namespace}/${componentName}.tsx`

  if (!existsSync(componentDefinitionFile)) {
    console.warn(
      `Ignore resource ${resource.type} as no component definition file found`,
    )
    continue
  }
  const componentDefinition = await import(`../../${componentDefinitionFile}`)
  const inputSchema = componentDefinition[`${componentName}InputSchema`]
  if (!inputSchema) {
    console.warn(
      `Ignore resource ${resource.type} as no input schema found`,
    )
    continue
  }
  debug('parsing %s from %O', componentName, resource.values)
  const resourceInput = inputSchema.parse(resource.values)
  const resourceAttributes: any = {}
  const renderValue = (
    value: any,
    schema: z.ZodSchema,
  ) => {
    const valueType = typeof value
    switch (valueType) {
      case 'object': {
        if (Array.isArray(value)) {
          return value.map((subValue: any) => {
            return renderValue(subValue, schema._def.innerType.element)
          })
        } else {
          return value // TODO: render object based on schema
          // const renderedValue: any = {}
          // for (const [subKey, subValue] of Object.entries(value)) {
          //   const renderedSubValue = renderValue(subValue, schema.shape[subKey])
          //   if (renderedSubValue !== undefined || renderedSubValue !== null) {
          //     renderedValue[subKey] = renderedSubValue
          //   }
          // }
          // return renderedValue
        }
      }
      case 'boolean':
        if (value === false) {
          return
        }
        break
      case 'string':
        if (value === '') {
          return
        }
        break
      case 'number':
        if (value === 0) {
          return
        }
        break
      default: {
        if (schema instanceof z.ZodDefault) {
          const defaultValue = schema._def.defaultValue()
          if (defaultValue === value) {
            return
          }
        }
      }
    }
    return value
  }
  for (const [key, value] of Object.entries(resourceInput)) {
    const renderedValue = renderValue(value, inputSchema.shape[key])
    if (renderedValue !== undefined && renderedValue !== null) {
      resourceAttributes[key] = renderedValue
    }
  }
  debug('parsed %s as %O', componentName, resourceInput)

  console.log(namespace, componentName, resourceAttributes)
}

// const appTsx = "foo";
// const appTsxFile = args["app-tsx-file"];

// if (appTsxFile) {
//   Deno.writeTextFileSync(appTsxFile, appTsx);
//   console.log(chalk.green("Saved App.tsx to"), appTsxFile);
// } else {
//   const title = "GENEATED App.tsx";
//   console.log(chalk.green(title));
//   console.log("".padEnd(title.length, "="));
//   console.log(appTsx);
//   console.log("".padEnd(title.length, "="));
// }

// const { namespaceMapping } = await import(
//   '../../standard-components/tf-aws/src/namespaceMapping.ts'
// )

console.log('namespaceMapping', namespaceMapping)

debug('tf generate finished at %O', new Date())
