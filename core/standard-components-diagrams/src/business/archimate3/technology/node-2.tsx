import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NODE_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.node;',
  _width: 70,
  _height: 40,
}

export function Node2(props: DiagramNodeProps) {
  return <Shape {...NODE_2} {...props} />
}
