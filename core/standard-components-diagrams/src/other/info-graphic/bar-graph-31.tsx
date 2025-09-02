import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAR_GRAPH_31 = {
  _style: {
    entity:
      'ellipse;whiteSpace=wrap;html=1;aspect=fixed;shadow=0;strokeColor=#10739E;strokeWidth=6;fontSize=16;align=center;fontStyle=1',
  },
  _original_width: 5,
  _original_height: 115,
}

export function BarGraph31(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_31}
      {...props}
      _style={extendStyle(BAR_GRAPH_31, props)}
    />
  )
}
