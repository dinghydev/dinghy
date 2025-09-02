import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAR_GRAPH_6 = {
  _style: {
    entity:
      'verticalLabelPosition=top;verticalAlign=bottom;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#CCCCCC;strokeColor=none;fontStyle=1;fontColor=#10739E;fontSize=12;shadow=0;align=left;opacity=70;',
  },
  _original_width: 5,
  _original_height: 120,
}

export function BarGraph6(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_6}
      {...props}
      _style={extendStyle(BAR_GRAPH_6, props)}
    />
  )
}
