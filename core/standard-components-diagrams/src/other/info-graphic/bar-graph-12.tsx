import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAR_GRAPH_12 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#23445D;strokeColor=none;shadow=0;',
  },
  _original_width: 1,
  _original_height: 100,
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
