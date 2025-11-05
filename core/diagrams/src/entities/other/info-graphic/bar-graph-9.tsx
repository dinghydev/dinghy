import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_9 = {
  _style: {
    entity:
      'verticalLabelPosition=top;verticalAlign=bottom;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#CCCCCC;strokeColor=none;fontStyle=1;fontColor=#4A5768;fontSize=12;shadow=0;align=left;opacity=70;',
  },
  _width: 8,
  _height: 120,
}

export function BarGraph9(props: NodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_9}
      {...props}
      _style={extendStyle(BAR_GRAPH_9, props)}
    />
  )
}
