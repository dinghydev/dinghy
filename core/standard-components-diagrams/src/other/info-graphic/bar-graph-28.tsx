import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAR_GRAPH_28 = {
  _style:
    'html=1;whiteSpace=wrap;shape=mxgraph.infographic.barCallout;dx=40;dy=30;fillColor=#AE4132;strokeColor=none;align=center;verticalAlign=top;fontColor=#ffffff;fontSize=14;fontStyle=1;shadow=0;spacingTop=5;',
  _width: 2,
  _height: 115,
}

export function BarGraph28(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_28}
      {...props}
      _style={extendStyle(BAR_GRAPH_28, props)}
    />
  )
}
