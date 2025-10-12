import type { TfRenderOptions } from '../types.ts'
import { requiredSchema } from './index.ts'
import {
  deepMerge,
  deepResolve,
  NodeTree,
  Props,
} from '@dinghy/base-components'

export const resourceOrData = (
  renderOptions: TfRenderOptions,
  category: string,
  tfRoot: Props,
  node: NodeTree,
  schemaField: string,
) => {
  const schema = requiredSchema(node, schemaField)
  const tfCategory = (tfRoot[category] ??= {}) as Props
  const tfElements = (tfCategory[node._props._type as any] ??= {}) as Props
  let tfElement: any
  if ((node._props as any)[category]) {
    tfElement = schema.partial().parse(node._props) as Props
    deepMerge(tfElement, (node._props as any)[category]) as Props
  } else {
    try {
      tfElement = schema.parse(node._props) as Props
    } catch (e) {
      console.error('input props', node._props)
      console.error('Error parsing schema', e)
      throw new Error('Error parsing schema')
    }
  }
  let resolvedElement = deepResolve(node, tfElement)
  resolvedElement = schema.strict().parse(resolvedElement)
  resolvedElement = removeDoubleUnderscorePrefix(resolvedElement)
  tfElements[node._props._id as any] = resolvedElement
  if (node._props?._importId && renderOptions.tf?.generateImport) {
    const importId = deepResolve(node, node._props, '_importId')
    if (importId) {
      tfRoot.import ??= []
      ;(tfRoot.import as any).push({
        id: importId,
        to: `${node._props._type}.${node._props._id}`,
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
