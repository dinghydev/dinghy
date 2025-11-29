import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_20 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.cylinder;isoAngle=15;fillColor=#12AAB5;strokeColor=none;fontStyle=1;fontColor=#12AAB5;fontSize=12;shadow=0;',
  },
  _width: 4,
  _height: 120,
}

export function BarGraph20(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BAR_GRAPH_20)} />
}
