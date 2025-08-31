import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MATRIX_3X3 = {
  _style: {
    entity:
      'html=1;fillColor=#F5AB50;strokeColor=none;shadow=0;fontSize=12;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;rounded=0;',
  },
  _width: 1,
  _height: 345,
}

export function Matrix3x3(props: DiagramNodeProps) {
  return (
    <Shape {...MATRIX_3X3} {...props} _style={extendStyle(MATRIX_3X3, props)} />
  )
}
