import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAR_GRAPH_3 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#AE4132;strokeColor=none;fontStyle=1;fontColor=#AE4132;fontSize=12;shadow=0;',
  },
  _width: 2,
  _height: 100,
}

export function BarGraph3(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_3}
      {...props}
      _style={extendStyle(BAR_GRAPH_3, props)}
    />
  )
}
