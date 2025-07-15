import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MATRIX_3X3_5 = {
  _style:
    'html=1;fillColor=#909090;strokeColor=none;shadow=0;fontSize=12;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;rounded=0;',
  _width: 5,
  _height: 345,
}

export function Matrix3x35(props: DiagramNodeProps) {
  return <Shape {...MATRIX_3X3_5} {...props} />
}
