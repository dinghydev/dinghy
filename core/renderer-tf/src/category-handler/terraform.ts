import type { NodeTree, Props } from '@diac/base-components'
import { globalCategory } from './globalCategory.ts'
import type { TfRenderOptions } from '../types.ts'

export const terraform = (
  renderOptions: TfRenderOptions,
  category: string,
  tfRoot: Props,
  node: NodeTree,
) => globalCategory(renderOptions, category, tfRoot, node)
