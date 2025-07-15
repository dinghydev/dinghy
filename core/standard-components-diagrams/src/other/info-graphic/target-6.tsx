import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TARGET_6 = {
  _style:
    'ellipse;html=1;strokeWidth=4;fillColor=#2F5B7C;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  _width: 5,
  _height: 350,
}

export function Target6(props: DiagramNodeProps) {
  return <Shape {...TARGET_6} {...props} />
}
