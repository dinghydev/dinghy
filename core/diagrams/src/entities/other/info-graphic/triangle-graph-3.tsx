import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRIANGLE_GRAPH_3 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=bottom;html=1;whiteSpace=wrap;shape=mxgraph.infographic.shadedTriangle;fillColor=#AE4132;strokeColor=none;fontSize=10;labelPosition=center;align=center;fontColor=#FFFFFF;fontStyle=1;shadow=0;',
  },
  _width: 2,
  _height: 140,
}

export function TriangleGraph3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TRIANGLE_GRAPH_3)} />
}
