import { z } from 'zod'

import { namespaceMapping } from '@dinghy/tf-aws'
import { existsSync } from '@std/fs/exists'
import chalk from 'chalk'
import Debug from 'debug'
const debug = Debug('parseResources')

const normalizeInputResources = (value: any): any => {
  if (typeof value === 'string') {
    if (value === '') {
      return undefined
    }
    if (value.includes('$')) {
      return value.replaceAll('$', '${"$"}')
    }
  }
  if (value === null) {
    return undefined
  }
  if (Array.isArray(value)) {
    const arrayValue = value.map(normalizeInputResources).filter((v) =>
      v !== undefined
    )
    if (arrayValue.length === 0) {
      return undefined
    }
    return arrayValue
  }
  if (typeof value === 'object') {
    const filteredEntries = Object.entries(value).map((
      [key, value],
    ) => [key === 'key' ? '__key' : key, normalizeInputResources(value)])
      .filter(([_, value]) => value !== undefined)
    if (filteredEntries.length === 0) {
      return undefined
    }
    return Object.fromEntries(filteredEntries)
  }
  return value
}

export async function parseResources(_args: any, resources: any) {
  const elements: Element[] = []
  let region: string | undefined
  const ignores: string[] = []
  for (const resource of normalizeInputResources(resources)) {
    debug('parsing', resource.name)
    const nameParts = resource.type.split('_')
    const isData = resource.mode === 'data'
    const dataPrefix = isData ? 'Data' : ''
    const componentName = nameParts.map((part: string) =>
      part.charAt(0).toUpperCase() + part.slice(1)
    ).join(
      '',
    )
    const tag = dataPrefix + componentName
    const namespace =
      namespaceMapping[componentName as keyof typeof namespaceMapping] ||
      (nameParts.length > 2 ? nameParts[1] : undefined)
    if (!namespace) {
      ignores.push(`Ignore resource ${tag} as no namespace mapping found`)
      continue
    }

    const componentDefinitionFile =
      `../standard-components/tf-aws/src/${namespace}/${tag}.tsx`

    if (!existsSync(componentDefinitionFile)) {
      ignores.push(
        `Ignore resource ${tag} as no component definition file found`,
      )
      continue
    }
    const componentDefinition = await import(
      `../../${componentDefinitionFile}`
    )
    const inputSchema = componentDefinition[`${tag}InputSchema`]
    if (!inputSchema) {
      ignores.push(`Ignore resource ${tag} as no input schema found`)
      continue
    }
    const resourceValues = resource.instances[0].attributes
    debug('parsing %s from %O', tag, resourceValues)
    const resourceInput = inputSchema.parse(resourceValues)
    const attributes: any = {}
    const renderValue = (
      value: any,
      schema: z.ZodSchema,
    ) => {
      const valueType = typeof value
      switch (valueType) {
        case 'object': {
          // TODO: render object based on schema
          return value
          // if (Array.isArray(value)) {
          //   return value.map((subValue: any) => {
          //     return renderValue(subValue, schema._def.innerType.element)
          //   }).filter((v: any) => v !== undefined)
          // } else {
          //   return removeEmptyString(value)
          //   // const renderedValue: any = {}
          //   // for (const [subKey, subValue] of Object.entries(value)) {
          //   //   const renderedSubValue = renderValue(subValue, schema.shape[subKey])
          //   //   if (renderedSubValue !== undefined || renderedSubValue !== null) {
          //   //     renderedValue[subKey] = renderedSubValue
          //   //   }
          //   // }
          //   // return renderedValue
          // }
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
        // deno-lint-ignore no-fallthrough
        case 'number':
          if (value === 0) {
            return
          }
          /* eslint-disable no-case-declarations */
        default: {
          if (schema instanceof z.ZodDefault) {
            const defaultValue = schema.def.defaultValue
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
    if (componentDefinition.importId) {
      const importId = componentDefinition.importId(resourceValues)
      if (importId) {
        attributes['_importId'] = importId
      }
    }
    if (
      tag === 'DataAwsSecretsmanagerSecret' && attributes['name'] &&
      attributes['arn']
    ) {
      delete attributes['arn']
    }
    if (
      tag === 'AwsInstance' && attributes['user_data']
    ) {
      delete attributes['user_data']
    }
    debug('parsed %s as %O', tag, resourceInput)

    elements.push({ tag, namespace, attributes } as any)

    if (!region && !isData && resourceValues.arn) {
      const arnParts = resourceValues.arn.split(':')
      if (arnParts[3]) {
        region = resourceValues.arn.split(':')[3]
      } else if (resourceValues.region) {
        region = resourceValues.region
      }
    }
  }

  for (const ignore of ignores) {
    console.warn(
      chalk.dim(
        ignore,
      ),
    )
  }

  if (!region) {
    throw new Error('No region detected from resources')
  }
  elements.push({
    tag: 'AwsRegion',
    attributes: {
      region,
    } as any,
  } as any)
  return elements
}
