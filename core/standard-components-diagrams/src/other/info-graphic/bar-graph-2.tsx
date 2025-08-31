import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAR_GRAPH_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#F2931E;strokeColor=none;fontStyle=1;fontColor=#F2931E;fontSize=12;shadow=0;',
  },
  _width: 1,
  _height: 100,
}

export function BarGraph2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_2}
      {...props}
      _style={extendStyle(BAR_GRAPH_2, props)}
    />
  )
}
