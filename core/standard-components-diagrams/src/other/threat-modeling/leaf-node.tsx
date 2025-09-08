import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LEAF_NODE = {
  _style: {
    entity:
      'rounded=0;whiteSpace=wrap;html=1;fillColor=#f5f5f5;strokeColor=#666666;',
  },
  _original_width: 120,
  _original_height: 80,
}

export function LeafNode(props: DiagramNodeProps) {
  return (
    <Shape {...LEAF_NODE} {...props} _style={extendStyle(LEAF_NODE, props)} />
  )
}
