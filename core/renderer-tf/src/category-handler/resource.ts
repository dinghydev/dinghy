import type { NodeTree, Props } from '@dinghy/base-components'
import { resourceOrData } from './resourceOrData.ts'
import type { TfRenderOptions } from '../types.ts'

export const resource = (
  renderOptions: TfRenderOptions,
  category: string,
  tfRoot: Props,
  node: NodeTree,
) => resourceOrData(renderOptions, category, tfRoot, node, '_inputSchema')
