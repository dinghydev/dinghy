import type { NodeTree, Props } from '@reactiac/base-components'
import { resourceOrData } from './resourceOrData.ts'

export const data = (category: string, tfRoot: Props, node: NodeTree) =>
  resourceOrData(category, tfRoot, node, '_inputSchema')
