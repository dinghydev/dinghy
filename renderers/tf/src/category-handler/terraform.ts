import type { NodeTree, Props } from '@reactiac/base-components'
import { globalCategory } from './globalCategory.ts'

export const terraform = (category: string, tfRoot: Props, node: NodeTree) =>
  globalCategory(category, tfRoot, node)
