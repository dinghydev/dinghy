import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROLL_3 = {
  _style:
    'ellipse;html=1;strokeWidth=4;fillColor=#5D7F99;strokeColor=none;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  _width: 2,
  _height: 400,
}

export function Roll3(props: DiagramNodeProps) {
  return <Shape {...ROLL_3} {...props} />
}
