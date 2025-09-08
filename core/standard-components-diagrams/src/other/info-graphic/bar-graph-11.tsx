import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_11 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#12AAB5;strokeColor=none;shadow=0;',
  },
  _original_width: 0,
  _original_height: 100,
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
