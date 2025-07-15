import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRIANGLE_5 = {
  _style:
    'triangle;direction=north;html=1;strokeWidth=4;fillColor=#BAC8D3;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  _width: 3,
  _height: 350,
}

export function Triangle5(props: DiagramNodeProps) {
  return <Shape {...TRIANGLE_5} {...props} />
}
