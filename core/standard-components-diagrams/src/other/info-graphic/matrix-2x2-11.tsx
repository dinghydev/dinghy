import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MATRIX_2X2_11 = {
  _style: {
    entity:
      'rounded=1;arcSize=50;html=1;fillColor=#CCCCCC;strokeColor=none;shadow=0;fontSize=14;fontColor=#FFFFFF;align=center;fontStyle=1;whiteSpace=wrap;horizontal=0;',
  },
  _width: 4,
  _height: 240,
}

export function Matrix2x211(props: DiagramNodeProps) {
  return (
    <Shape
      {...MATRIX_2X2_11}
      {...props}
      _style={extendStyle(MATRIX_2X2_11, props)}
    />
  )
}
