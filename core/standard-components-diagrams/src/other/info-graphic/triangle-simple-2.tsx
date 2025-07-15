import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRIANGLE_SIMPLE_2 = {
  _style:
    'triangle;direction=north;strokeWidth=4;html=1;fillColor=#F2931E;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  _width: 1,
  _height: 350,
}

export function TriangleSimple2(props: DiagramNodeProps) {
  return <Shape {...TRIANGLE_SIMPLE_2} {...props} />
}
