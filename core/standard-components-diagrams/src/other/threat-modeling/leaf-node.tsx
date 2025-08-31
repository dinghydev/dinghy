import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LEAF_NODE = {
  _style:
    'rounded=0;whiteSpace=wrap;html=1;fillColor=#f5f5f5;strokeColor=#666666;',
  _width: 120,
  _height: 80,
}

export function LeafNode(props: DiagramNodeProps) {
  return (
    <Shape {...LEAF_NODE} {...props} _style={extendStyle(LEAF_NODE, props)} />
  )
}
