import { mergician } from 'mergician'
import type { NodeTree, Props } from '../../../../base/components/src/types.ts'
import type { TfRenderOptions } from '../types.ts'
import { requiredSchema } from './index.ts'
import { utils } from '@reactiac/base-components'
const { deepResolve } = utils

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
    tfElement = mergician(tfElement, (node._props as any)[category]) as Props
  } else {
    tfElement = schema.parse(node._props) as Props
  }
  let resolvedElement = deepResolve(node, tfElement)
  resolvedElement = schema.strict().parse(resolvedElement)
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
