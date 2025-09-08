import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRIANGLE_GRAPH_5 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=bottom;html=1;whiteSpace=wrap;shape=mxgraph.infographic.shadedTriangle;fillColor=#10739E;strokeColor=none;fontSize=10;labelPosition=center;align=center;fontColor=#FFFFFF;fontStyle=1;shadow=0;',
  },
  _original_width: 4,
  _original_height: 140,
}

export function TriangleGraph5(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRIANGLE_GRAPH_5}
      {...props}
      _style={extendStyle(TRIANGLE_GRAPH_5, props)}
    />
  )
}
