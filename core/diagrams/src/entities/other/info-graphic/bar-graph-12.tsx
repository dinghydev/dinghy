import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_12 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#23445D;strokeColor=none;shadow=0;',
  },
  _width: 1,
  _height: 100,
}

export function BarGraph12(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_12}
      {...props}
      _style={extendStyle(BAR_GRAPH_12, props)}
    />
  )
}
