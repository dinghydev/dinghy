import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAR_GRAPH_30 = {
  _style:
    'html=1;whiteSpace=wrap;shape=mxgraph.infographic.barCallout;dx=70;dy=30;fillColor=#12AAB5;strokeColor=none;align=center;verticalAlign=top;fontColor=#ffffff;fontSize=14;fontStyle=1;shadow=0;spacingTop=5;',
  _width: 4,
  _height: 115,
}

export function BarGraph30(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_30}
      {...props}
      _style={extendStyle(BAR_GRAPH_30, props)}
    />
  )
}
