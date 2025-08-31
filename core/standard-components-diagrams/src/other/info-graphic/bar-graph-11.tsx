import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAR_GRAPH_11 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#12AAB5;strokeColor=none;shadow=0;',
  _width: 0,
  _height: 100,
}

export function BarGraph11(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_11}
      {...props}
      _style={extendStyle(BAR_GRAPH_11, props)}
    />
  )
}
