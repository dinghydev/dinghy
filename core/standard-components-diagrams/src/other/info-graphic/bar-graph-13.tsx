import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_13 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#AE4132;strokeColor=none;shadow=0;',
  },
  _width: 2,
  _height: 100,
}

export function BarGraph13(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_13}
      {...props}
      _style={extendStyle(BAR_GRAPH_13, props)}
    />
  )
}
