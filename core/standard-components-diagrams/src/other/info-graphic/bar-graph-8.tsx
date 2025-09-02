import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAR_GRAPH_8 = {
  _style: {
    entity:
      'verticalLabelPosition=top;verticalAlign=bottom;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#CCCCCC;strokeColor=none;fontStyle=1;fontColor=#D82A23;fontSize=12;shadow=0;align=left;opacity=70;',
  },
  _original_width: 7,
  _original_height: 120,
}

export function BarGraph8(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_8}
      {...props}
      _style={extendStyle(BAR_GRAPH_8, props)}
    />
  )
}
