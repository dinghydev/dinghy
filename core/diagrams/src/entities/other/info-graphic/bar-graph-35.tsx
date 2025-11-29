import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_35 = {
  _style: {
    entity:
      'ellipse;whiteSpace=wrap;html=1;aspect=fixed;shadow=0;strokeColor=#12AAB5;strokeWidth=6;fontSize=16;align=center;fontStyle=1',
  },
  _width: 9,
  _height: 115,
}

export function BarGraph35(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BAR_GRAPH_35)} />
}
