import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_32 = {
  _style: {
    entity:
      'ellipse;whiteSpace=wrap;html=1;aspect=fixed;shadow=0;strokeColor=#F2931E;strokeWidth=6;fontSize=16;align=center;fontStyle=1',
  },
  _width: 6,
  _height: 115,
}

export function BarGraph32(props: NodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_32}
      {...props}
      _style={extendStyle(BAR_GRAPH_32, props)}
    />
  )
}
