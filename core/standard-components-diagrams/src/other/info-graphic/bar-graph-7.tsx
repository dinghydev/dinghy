import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAR_GRAPH_7 = {
  _style: {
    entity:
      'verticalLabelPosition=top;verticalAlign=bottom;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#CCCCCC;strokeColor=none;fontStyle=1;fontColor=#F19A19;fontSize=12;shadow=0;align=left;opacity=70;',
  },
  _width: 6,
  _height: 120,
}

export function BarGraph7(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_7}
      {...props}
      _style={extendStyle(BAR_GRAPH_7, props)}
    />
  )
}
