import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAR_GRAPH_16 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.cylinder;isoAngle=15;fillColor=#10739E;strokeColor=none;fontStyle=1;fontColor=#10739E;fontSize=12;shadow=0;',
  _width: 0,
  _height: 120,
}

export function BarGraph16(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_16}
      {...props}
      _style={extendStyle(BAR_GRAPH_16, props)}
    />
  )
}
