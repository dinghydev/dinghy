import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_11 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#12AAB5;strokeColor=none;shadow=0;',
  },
  _width: 0,
  _height: 100,
}

export function BarGraph11(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BAR_GRAPH_11)} />
}
