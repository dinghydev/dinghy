import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAR_GRAPH_4 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#23445D;strokeColor=none;fontStyle=1;fontColor=#23445D;fontSize=12;shadow=0;',
  _width: 3,
  _height: 100,
}

export function BarGraph4(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_4}
      {...props}
      _style={extendStyle(BAR_GRAPH_4, props)}
    />
  )
}
