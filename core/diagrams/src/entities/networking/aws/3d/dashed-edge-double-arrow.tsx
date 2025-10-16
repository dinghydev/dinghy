import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DASHED_EDGE_DOUBLE_ARROW = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.dashedEdgeDouble2;strokeColor=#2D6195;aspect=fixed;',
  },
  _width: 31.6,
  _height: 18,
}

export function DashedEdgeDoubleArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...DASHED_EDGE_DOUBLE_ARROW}
      {...props}
      _style={extendStyle(DASHED_EDGE_DOUBLE_ARROW, props)}
    />
  )
}
