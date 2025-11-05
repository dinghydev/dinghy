import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_5 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#12AAB5;strokeColor=none;fontStyle=1;fontColor=#12AAB5;fontSize=12;shadow=0;',
  },
  _width: 4,
  _height: 100,
}

export function BarGraph5(props: NodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_5}
      {...props}
      _style={extendStyle(BAR_GRAPH_5, props)}
    />
  )
}
