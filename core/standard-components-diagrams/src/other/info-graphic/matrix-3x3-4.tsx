import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MATRIX_3X3_4 = {
  _style: {
    entity:
      'html=1;fillColor=#777777;strokeColor=none;shadow=0;fontSize=12;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;rounded=0;',
  },
  _width: 4,
  _height: 345,
}

export function Matrix3x34(props: DiagramNodeProps) {
  return (
    <Shape
      {...MATRIX_3X3_4}
      {...props}
      _style={extendStyle(MATRIX_3X3_4, props)}
    />
  )
}
