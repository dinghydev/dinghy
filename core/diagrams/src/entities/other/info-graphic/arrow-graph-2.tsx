import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARROW_GRAPH_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=top;shape=mxgraph.arrows2.arrow;dy=0.4;dx=60;direction=north;notch=0;strokeColor=#FFFFFF;strokeWidth=6;fillColor=#F2931E;fontSize=14;labelPosition=center;verticalLabelPosition=bottom;fontStyle=1',
  },
  _width: 1,
  _height: 200,
}

export function ArrowGraph2(props: NodeProps) {
  return (
    <Shape
      {...ARROW_GRAPH_2}
      {...props}
      _style={extendStyle(ARROW_GRAPH_2, props)}
    />
  )
}
