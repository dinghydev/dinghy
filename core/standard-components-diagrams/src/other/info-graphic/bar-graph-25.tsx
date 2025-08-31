import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAR_GRAPH_25 = {
  _style:
    'verticalLabelPosition=top;verticalAlign=bottom;html=1;shape=mxgraph.infographic.cylinder;isoAngle=15;fillColor=#CCCCCC;strokeColor=none;fontStyle=1;fontColor=#12AAB5;fontSize=12;shadow=0;align=left;opacity=70;',
  _width: 9,
  _height: 120,
}

export function BarGraph25(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_25}
      {...props}
      _style={extendStyle(BAR_GRAPH_25, props)}
    />
  )
}
