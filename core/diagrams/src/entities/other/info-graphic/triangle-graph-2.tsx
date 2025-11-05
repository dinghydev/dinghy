import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRIANGLE_GRAPH_2 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=bottom;html=1;whiteSpace=wrap;shape=mxgraph.infographic.shadedTriangle;fillColor=#12AAB5;strokeColor=none;fontSize=10;labelPosition=center;align=center;fontColor=#FFFFFF;fontStyle=1;shadow=0;',
  },
  _width: 1,
  _height: 140,
}

export function TriangleGraph2(props: NodeProps) {
  return (
    <Shape
      {...TRIANGLE_GRAPH_2}
      {...props}
      _style={extendStyle(TRIANGLE_GRAPH_2, props)}
    />
  )
}
