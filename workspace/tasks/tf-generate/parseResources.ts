import { z } from 'zod'

import { namespaceMapping } from '../../../standard-components/tf-aws/src/namespaceMapping.ts'
import { existsSync } from '@std/fs/exists'
import chalk from 'chalk'
import Debug from 'debug'
const debug = Debug('parseResources')
import type { Element } from './types.ts'

export async function parseResources(_args: any, resources: any) {
  const elements: Element[] = []
  let region: string | undefined
  for (const resource of resources) {
    debug('parsing', resource.address)
    const nameParts = resource.type.split('_')
    const isData = resource.mode === 'data'
    const dataPrefix = isData ? 'Data' : ''
    const componentName = nameParts.map((part: string) =>
      part.charAt(0).toUpperCase() + part.slice(1)
    ).join(
      '',
    )
    const tag = dataPrefix + componentName
    const namespace = nameParts.length > 2
      ? nameParts[1]
      : namespaceMapping[componentName as keyof typeof namespaceMapping]
    if (!namespace) {
      console.warn(
        chalk.dim(
          `Ignore resource ${resource.type} as no namespace mapping found`,
        ),
      )
      continue
    }

    const componentDefinitionFile =
      `../standard-components/tf-aws/src/${namespace}/${tag}.tsx`

    if (!existsSync(componentDefinitionFile)) {
      console.warn(
        chalk.dim(
          `Ignore resource ${resource.type} as no component definition file found`,
        ),
      )
      continue
    }
    const componentDefinition = await import(`../../${componentDefinitionFile}`)
    const inputSchema = componentDefinition[`${tag}InputSchema`]
    if (!inputSchema) {
      console.warn(
        chalk.dim(`Ignore resource ${resource.type} as no input schema found`),
      )
      continue
    }
    debug('parsing %s from %O', componentName, resource.values)
    const resourceInput = inputSchema.parse(resource.values)
    const attributes: any = {}
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
        attributes[key] = renderedValue
      }
    }
    debug('parsed %s as %O', componentName, resourceInput)

    elements.push({ tag, namespace, attributes })

    if (!region && !isData && resource.values.arn) {
      const arnParts = resource.values.arn.split(':')
      if (arnParts[3]) {
        region = resource.values.arn.split(':')[3]
      } else if (resource.values.region) {
        region = resource.values.region
      }
    }
  }

  if (!region) {
    console.error(chalk.red('No region detected from resources'))
    Deno.exit(1)
  }
  elements.push({ tag: 'AwsRegion', attributes: { region } })

  return elements
}
