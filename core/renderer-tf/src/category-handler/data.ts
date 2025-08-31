import type { NodeTree, Props } from '@diac/base-components'
import { resourceOrData } from './resourceOrData.ts'
import { TfRenderOptions } from '../types.ts'
export const data = (
  renderOptions: TfRenderOptions,
  category: string,
  tfRoot: Props,
  node: NodeTree,
) => resourceOrData(renderOptions, category, tfRoot, node, '_inputSchema')
