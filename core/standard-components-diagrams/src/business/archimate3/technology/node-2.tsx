import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NODE_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.node;',
  _width: 70,
  _height: 40,
}

export function Node2(props: DiagramNodeProps) {
  return <Shape {...NODE_2} {...props} _style={extendStyle(NODE_2, props)} />
}
