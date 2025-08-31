import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAR_GRAPH_35 = {
  _style:
    'ellipse;whiteSpace=wrap;html=1;aspect=fixed;shadow=0;strokeColor=#12AAB5;strokeWidth=6;fontSize=16;align=center;fontStyle=1',
  _width: 9,
  _height: 115,
}

export function BarGraph35(props: DiagramNodeProps) {
  return (
    <Shape
      {...BAR_GRAPH_35}
      {...props}
      _style={extendStyle(BAR_GRAPH_35, props)}
    />
  )
}
