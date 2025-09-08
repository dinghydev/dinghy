import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRIANGLE_GRAPH_3 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=bottom;html=1;whiteSpace=wrap;shape=mxgraph.infographic.shadedTriangle;fillColor=#AE4132;strokeColor=none;fontSize=10;labelPosition=center;align=center;fontColor=#FFFFFF;fontStyle=1;shadow=0;',
  },
  _original_width: 2,
  _original_height: 140,
}

export function TriangleGraph3(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRIANGLE_GRAPH_3}
      {...props}
      _style={extendStyle(TRIANGLE_GRAPH_3, props)}
    />
  )
}
