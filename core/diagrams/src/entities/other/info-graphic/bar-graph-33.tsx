import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_33 = {
  _style: {
    entity:
      'ellipse;whiteSpace=wrap;html=1;aspect=fixed;shadow=0;strokeColor=#AE4132;strokeWidth=6;fontSize=16;align=center;fontStyle=1',
  },
  _width: 7,
  _height: 115,
}

export function BarGraph33(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BAR_GRAPH_33)} />
}
