import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_14 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#F2931E;strokeColor=none;shadow=0;',
  },
  _width: 3,
  _height: 100,
}

export function BarGraph14(props: NodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_14}
      {...props}
      _style={extendStyle(BAR_GRAPH_14, props)}
    />
  )
}
