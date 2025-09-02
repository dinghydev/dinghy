import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRIANGLE_GRAPH = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=bottom;html=1;whiteSpace=wrap;shape=mxgraph.infographic.shadedTriangle;fillColor=#23445D;strokeColor=none;fontSize=10;labelPosition=center;align=center;fontColor=#FFFFFF;fontStyle=1;shadow=0;',
  },
  _original_width: 0,
  _original_height: 140,
}

export function TriangleGraph(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRIANGLE_GRAPH}
      {...props}
      _style={extendStyle(TRIANGLE_GRAPH, props)}
    />
  )
}
