import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRIANGULAR_DIAGRAM_2 = {
  _style: {
    entity:
      'triangle;whiteSpace=wrap;html=1;shadow=0;strokeColor=#FFFFFF;strokeWidth=6;fillColor=#F2931E;fontSize=16;fontColor=#FFFFFF;align=center;direction=north;fontStyle=1',
  },
  _width: 1,
  _height: 360,
}

export function TriangularDiagram2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRIANGULAR_DIAGRAM_2}
      {...props}
      _style={extendStyle(TRIANGULAR_DIAGRAM_2, props)}
    />
  )
}
