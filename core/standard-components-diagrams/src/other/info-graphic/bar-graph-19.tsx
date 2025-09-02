import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAR_GRAPH_19 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.cylinder;isoAngle=15;fillColor=#23445D;strokeColor=none;fontStyle=1;fontColor=#23445D;fontSize=12;shadow=0;',
  },
  _original_width: 3,
  _original_height: 120,
}

export function BarGraph19(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_19}
      {...props}
      _style={extendStyle(BAR_GRAPH_19, props)}
    />
  )
}
