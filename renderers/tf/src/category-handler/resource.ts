import type { NodeTree, Props } from '@reactiac/base-components'
import { resourceOrData } from './resourceOrData.js'

export const resource = (category: string, tfRoot: Props, node: NodeTree) =>
  resourceOrData(category, tfRoot, node, '_inputSchema')
