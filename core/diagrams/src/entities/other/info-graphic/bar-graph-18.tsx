import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_18 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.cylinder;isoAngle=15;fillColor=#AE4132;strokeColor=none;fontStyle=1;fontColor=#AE4132;fontSize=12;shadow=0;',
  },
  _width: 2,
  _height: 120,
}

export function BarGraph18(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BAR_GRAPH_18)} />
}
