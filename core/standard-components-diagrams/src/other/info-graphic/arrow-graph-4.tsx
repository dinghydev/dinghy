import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARROW_GRAPH_4 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=top;shape=mxgraph.arrows2.arrow;dy=0.4;dx=60;direction=north;notch=0;strokeColor=#FFFFFF;strokeWidth=6;fillColor=#23445D;fontSize=14;labelPosition=center;verticalLabelPosition=bottom;fontStyle=1',
  },
  _original_width: 3,
  _original_height: 200,
}

export function ArrowGraph4(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARROW_GRAPH_4}
      {...props}
      _style={extendStyle(ARROW_GRAPH_4, props)}
    />
  )
}
