import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_17 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.cylinder;isoAngle=15;fillColor=#F2931E;strokeColor=none;fontStyle=1;fontColor=#F2931E;fontSize=12;shadow=0;',
  },
  _original_width: 1,
  _original_height: 120,
}

export function BarGraph17(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_17}
      {...props}
      _style={extendStyle(BAR_GRAPH_17, props)}
    />
  )
}
