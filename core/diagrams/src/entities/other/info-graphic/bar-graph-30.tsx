import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_30 = {
  _style: {
    entity:
      'html=1;whiteSpace=wrap;shape=mxgraph.infographic.barCallout;dx=70;dy=30;fillColor=#12AAB5;strokeColor=none;align=center;verticalAlign=top;fontColor=#ffffff;fontSize=14;fontStyle=1;shadow=0;spacingTop=5;',
  },
  _width: 4,
  _height: 115,
}

export function BarGraph30(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BAR_GRAPH_30)} />
}
