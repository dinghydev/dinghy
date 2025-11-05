import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_23 = {
  _style: {
    entity:
      'verticalLabelPosition=top;verticalAlign=bottom;html=1;shape=mxgraph.infographic.cylinder;isoAngle=15;fillColor=#CCCCCC;strokeColor=none;fontStyle=1;fontColor=#AE4132;fontSize=12;shadow=0;align=left;opacity=70;',
  },
  _width: 7,
  _height: 120,
}

export function BarGraph23(props: NodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_23}
      {...props}
      _style={extendStyle(BAR_GRAPH_23, props)}
    />
  )
}
