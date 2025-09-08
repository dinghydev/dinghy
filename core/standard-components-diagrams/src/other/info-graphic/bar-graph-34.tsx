import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_34 = {
  _style: {
    entity:
      'ellipse;whiteSpace=wrap;html=1;aspect=fixed;shadow=0;strokeColor=#23445D;strokeWidth=6;fontSize=16;align=center;fontStyle=1',
  },
  _original_width: 8,
  _original_height: 115,
}

export function BarGraph34(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_34}
      {...props}
      _style={extendStyle(BAR_GRAPH_34, props)}
    />
  )
}
