import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRIANGLE_GRAPH_4 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=bottom;html=1;whiteSpace=wrap;shape=mxgraph.infographic.shadedTriangle;fillColor=#F2931E;strokeColor=none;fontSize=10;labelPosition=center;align=center;fontColor=#FFFFFF;fontStyle=1;shadow=0;',
  },
  _original_width: 3,
  _original_height: 140,
}

export function TriangleGraph4(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRIANGLE_GRAPH_4}
      {...props}
      _style={extendStyle(TRIANGLE_GRAPH_4, props)}
    />
  )
}
