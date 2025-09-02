import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAR_GRAPH_24 = {
  _style: {
    entity:
      'verticalLabelPosition=top;verticalAlign=bottom;html=1;shape=mxgraph.infographic.cylinder;isoAngle=15;fillColor=#CCCCCC;strokeColor=none;fontStyle=1;fontColor=#23445D;fontSize=12;shadow=0;align=left;opacity=70;',
  },
  _original_width: 8,
  _original_height: 120,
}

export function BarGraph24(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_24}
      {...props}
      _style={extendStyle(BAR_GRAPH_24, props)}
    />
  )
}
