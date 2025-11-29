import {
  deepMerge,
  deepResolve,
  NodeTree,
  Props,
} from '@dinghy/base-components'
import { requiredSchema } from './index.ts'
import type { TfRenderOptions } from '../types.ts'

export const terraform = (
  _renderOptions: TfRenderOptions,
  category: string,
  tfRoot: Props,
  node: NodeTree,
) => {
  const tfElement = node._props._terraform
    ? node._props._terraform
    : requiredSchema(node, '_inputSchema').parse(node._props)
  deepResolve(node, tfElement)

  const terraformRoot: any = tfRoot[category] ??= {}
  deepMerge(terraformRoot, tfElement)
}
