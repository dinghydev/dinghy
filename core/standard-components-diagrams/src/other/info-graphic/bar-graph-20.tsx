import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAR_GRAPH_20 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.cylinder;isoAngle=15;fillColor=#12AAB5;strokeColor=none;fontStyle=1;fontColor=#12AAB5;fontSize=12;shadow=0;',
  _width: 4,
  _height: 120,
}

export function BarGraph20(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_20}
      {...props}
      _style={extendStyle(BAR_GRAPH_20, props)}
    />
  )
}
