import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRIANGULAR_DIAGRAM_3 = {
  _style: {
    entity:
      'triangle;whiteSpace=wrap;html=1;shadow=0;strokeColor=#FFFFFF;strokeWidth=6;fillColor=#AE4132;fontSize=16;fontColor=#FFFFFF;align=center;direction=south;fontStyle=1',
  },
  _width: 2,
  _height: 360,
}

export function TriangularDiagram3(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRIANGULAR_DIAGRAM_3}
      {...props}
      _style={extendStyle(TRIANGULAR_DIAGRAM_3, props)}
    />
  )
}
