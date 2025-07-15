import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROLL_7 = {
  _style:
    'ellipse;html=1;strokeWidth=4;fillColor=#F5AB50;strokeColor=none;shadow=0;fontSize=20;fontColor=#FFFFFF;align=center;fontStyle=1;whiteSpace=wrap;spacing=10;',
  _width: 6,
  _height: 400,
}

export function Roll7(props: DiagramNodeProps) {
  return <Shape {...ROLL_7} {...props} />
}
