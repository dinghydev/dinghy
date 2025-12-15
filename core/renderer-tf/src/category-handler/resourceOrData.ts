import type { TfRenderOptions } from '../types.ts'
import { requiredSchema } from './index.ts'
import { deepResolve, NodeTree, Props } from '@dinghy/base-components'

export const resourceOrData = (
  renderOptions: TfRenderOptions,
  category: string,
  tfRoot: Props,
  node: NodeTree,
  schemaField: string,
) => {
  const schema = requiredSchema(node, schemaField)
  const tfCategory: any = tfRoot[category] ??= {}
  const tfElements: any = tfCategory[node._props._type as any] ??= {}
  let tfElement: any = node._props[`_${category}`]
  if (!tfElement) {
    try {
      tfElement = schema.parse(node._props)
    } catch (e) {
      console.error('input props', node._props)
      console.error('Error parsing schema', e)
      throw new Error('Error parsing schema')
    }
  }
  deepResolve(tfElement)
  removeDoubleUnderscorePrefix(tfElement)
  const id: any = node._props._consolidatedId || node._props._id
  if (category === 'resource' && schema.shape.tags) {
    tfElement.tags ??= {}
    tfElement.tags['Name'] ??= node._props._title
    tfElement.tags['iac:id'] ??= id
  }
  tfElements[id] = tfElement
  if (
    renderOptions.tf?.generateImport && node._props?._importSchema
  ) {
    let identity: any
    try {
      identity = node._props?._importSchema.parse(node._props) as Props
    } catch (_ignore) {
      return
    }
    if (identity && Object.keys(identity).length > 0) {
      deepResolve(identity)
      removeDoubleUnderscorePrefix(identity)
      const imports = (tfRoot.import ??= []) as any[]
      const to = `${node._props._type}.${id}`
      const existingIndex = imports.findIndex((imp) => imp.to === to)
      if (existingIndex !== -1) {
        imports.splice(existingIndex, 1)
      }
      imports.push({
        to,
        identity,
      })
    }
  }
}

function removeDoubleUnderscorePrefix(element: any): any {
  Object.keys(element).forEach((key) => {
    if (key.startsWith('__')) {
      element[key.slice(2)] = element[key]
      delete element[key]
    }
  })
  return element
}
