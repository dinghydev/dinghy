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
  deepResolve(node, tfElement)
  removeDoubleUnderscorePrefix(tfElement)
  tfElements[node._props._id as any] = tfElement
  if (
    renderOptions.tf?.generateImport && node._props?._importSchema
  ) {
    const importId = deepResolve(node, node._props, '_importId')
    if (importId) {
      tfRoot.import ??= []
      ;(tfRoot.import as any).push({
        id: importId,
        to: `${node._props._type}.${node._props._id}`,
      })
    }
    throw new Error('Not implemented yet')
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
