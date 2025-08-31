import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MATRIX_3X3_3 = {
  _style: {
    entity:
      'html=1;fillColor=#444444;strokeColor=none;shadow=0;fontSize=12;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;rounded=0;',
  },
  _width: 3,
  _height: 345,
}

export function Matrix3x33(props: DiagramNodeProps) {
  return (
    <Shape
      {...MATRIX_3X3_3}
      {...props}
      _style={extendStyle(MATRIX_3X3_3, props)}
    />
  )
}
