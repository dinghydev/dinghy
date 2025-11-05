import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NODE_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.node;',
  },
  _width: 70,
  _height: 40,
}

export function Node2(props: NodeProps) {
  return <Shape {...NODE_2} {...props} _style={extendStyle(NODE_2, props)} />
}
