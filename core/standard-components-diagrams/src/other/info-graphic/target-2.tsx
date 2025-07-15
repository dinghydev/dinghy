import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TARGET_2 = {
  _style:
    'ellipse;html=1;strokeWidth=4;fillColor=#F8C382;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  _width: 1,
  _height: 350,
}

export function Target2(props: DiagramNodeProps) {
  return <Shape {...TARGET_2} {...props} />
}
