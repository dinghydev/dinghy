import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRIANGULAR_DIAGRAM = {
  _style: {
    entity:
      'triangle;whiteSpace=wrap;html=1;shadow=0;strokeColor=#FFFFFF;strokeWidth=6;fillColor=#10739E;fontSize=16;fontColor=#FFFFFF;align=center;direction=north;fontStyle=1',
  },
  _width: 0,
  _height: 360,
}

export function TriangularDiagram(props: NodeProps) {
  return (
    <Shape
      {...TRIANGULAR_DIAGRAM}
      {...props}
      _style={extendStyle(TRIANGULAR_DIAGRAM, props)}
    />
  )
}
