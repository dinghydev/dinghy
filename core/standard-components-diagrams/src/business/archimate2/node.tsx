import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NODE = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.application;appType=node',
  _width: 100,
  _height: 75,
}

export function Node(props: DiagramNodeProps) {
  return <Shape {...NODE} {...props} />
}
