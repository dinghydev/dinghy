import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BAR_GRAPH_33 = {
  _style: {
    entity:
      'ellipse;whiteSpace=wrap;html=1;aspect=fixed;shadow=0;strokeColor=#AE4132;strokeWidth=6;fontSize=16;align=center;fontStyle=1',
  },
  _original_width: 7,
  _original_height: 115,
}

export function BarGraph33(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_33}
      {...props}
      _style={extendStyle(BAR_GRAPH_33, props)}
    />
  )
}
