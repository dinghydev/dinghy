import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MATRIX_2X2_12 = {
  _style: {
    entity:
      'rounded=1;arcSize=50;html=1;fillColor=#CCCCCC;strokeColor=none;shadow=0;fontSize=14;fontColor=#FFFFFF;align=center;fontStyle=1;whiteSpace=wrap;',
  },
  _original_width: 6,
  _original_height: 240,
}

export function Matrix2x212(props: DiagramNodeProps) {
  return (
    <Shape
      {...MATRIX_2X2_12}
      {...props}
      _style={extendStyle(MATRIX_2X2_12, props)}
    />
  )
}
