import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EDGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.edge2;strokeColor=#000000;aspect=fixed;',
  },
  _width: 97,
  _height: 107.4,
}

export function Edge(props: DiagramNodeProps) {
  return <Shape {...EDGE} {...props} _style={extendStyle(EDGE, props)} />
}
