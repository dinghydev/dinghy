import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_10 = {
  _style: {
    entity:
      'verticalLabelPosition=top;verticalAlign=bottom;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#CCCCCC;strokeColor=none;fontStyle=1;fontColor=#15AA96;fontSize=12;shadow=0;align=left;opacity=70;',
  },
  _width: 9,
  _height: 120,
}

export function BarGraph10(props: NodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_10}
      {...props}
      _style={extendStyle(BAR_GRAPH_10, props)}
    />
  )
}
