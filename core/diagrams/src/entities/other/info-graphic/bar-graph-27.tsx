import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_27 = {
  _style: {
    entity:
      'html=1;whiteSpace=wrap;shape=mxgraph.infographic.barCallout;dx=80;dy=30;fillColor=#F2931E;strokeColor=none;align=center;verticalAlign=top;fontColor=#ffffff;fontSize=14;fontStyle=1;shadow=0;spacingTop=5;',
  },
  _width: 1,
  _height: 115,
}

export function BarGraph27(props: NodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_27}
      {...props}
      _style={extendStyle(BAR_GRAPH_27, props)}
    />
  )
}
