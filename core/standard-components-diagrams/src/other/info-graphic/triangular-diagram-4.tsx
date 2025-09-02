import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRIANGULAR_DIAGRAM_4 = {
  _style: {
    entity:
      'triangle;whiteSpace=wrap;html=1;shadow=0;strokeColor=#FFFFFF;strokeWidth=6;fillColor=#23445D;fontSize=16;fontColor=#FFFFFF;align=center;direction=north;fontStyle=1',
  },
  _original_width: 3,
  _original_height: 360,
}

export function TriangularDiagram4(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRIANGULAR_DIAGRAM_4}
      {...props}
      _style={extendStyle(TRIANGULAR_DIAGRAM_4, props)}
    />
  )
}
