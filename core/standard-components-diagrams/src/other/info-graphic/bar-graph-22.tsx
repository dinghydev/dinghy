import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_22 = {
  _style: {
    entity:
      'verticalLabelPosition=top;verticalAlign=bottom;html=1;shape=mxgraph.infographic.cylinder;isoAngle=15;fillColor=#CCCCCC;strokeColor=none;fontStyle=1;fontColor=#F2931E;fontSize=12;shadow=0;align=left;opacity=70;',
  },
  _width: 6,
  _height: 120,
}

export function BarGraph22(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_22}
      {...props}
      _style={extendStyle(BAR_GRAPH_22, props)}
    />
  )
}
