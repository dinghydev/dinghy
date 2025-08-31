import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NODE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=node;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function Node(props: DiagramNodeProps) {
  return <Shape {...NODE} {...props} _style={extendStyle(NODE, props)} />
}
