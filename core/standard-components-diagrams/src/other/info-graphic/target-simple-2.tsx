import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TARGET_SIMPLE_2 = {
  _style:
    'ellipse;html=1;strokeWidth=4;fillColor=#AE4132;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  _width: 2,
  _height: 350,
}

export function TargetSimple2(props: DiagramNodeProps) {
  return <Shape {...TARGET_SIMPLE_2} {...props} />
}
