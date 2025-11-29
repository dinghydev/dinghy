import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_16 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.cylinder;isoAngle=15;fillColor=#10739E;strokeColor=none;fontStyle=1;fontColor=#10739E;fontSize=12;shadow=0;',
  },
  _width: 0,
  _height: 120,
}

export function BarGraph16(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BAR_GRAPH_16)} />
}
