import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TARGET_7 = {
  _style:
    'ellipse;html=1;strokeWidth=4;fillColor=#23445D;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  _width: 6,
  _height: 350,
}

export function Target7(props: DiagramNodeProps) {
  return <Shape {...TARGET_7} {...props} />
}
