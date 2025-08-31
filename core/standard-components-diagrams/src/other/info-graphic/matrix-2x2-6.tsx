import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MATRIX_2X2_6 = {
  _style:
    'html=1;fillColor=#CCCCCC;strokeColor=none;shadow=0;fontSize=14;fontColor=#FFFFFF;align=center;fontStyle=1;whiteSpace=wrap;rounded=0;',
  _width: 6,
  _height: 240,
}

export function Matrix2x26(props: DiagramNodeProps) {
  return (
    <Shape
      {...MATRIX_2X2_6}
      {...props}
      _style={extendStyle(MATRIX_2X2_6, props)}
    />
  )
}
