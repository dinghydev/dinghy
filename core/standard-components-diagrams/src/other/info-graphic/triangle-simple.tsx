import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRIANGLE_SIMPLE = {
  _style:
    'triangle;direction=north;strokeWidth=4;html=1;fillColor=#10739E;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  _width: 0,
  _height: 350,
}

export function TriangleSimple(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRIANGLE_SIMPLE}
      {...props}
      _style={extendStyle(TRIANGLE_SIMPLE, props)}
    />
  )
}
