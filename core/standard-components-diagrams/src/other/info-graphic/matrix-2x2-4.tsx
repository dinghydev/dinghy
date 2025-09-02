import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MATRIX_2X2_4 = {
  _style: {
    entity:
      'html=1;fillColor=#23445D;strokeColor=none;shadow=0;fontSize=12;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;rounded=0;',
  },
  _original_width: 3,
  _original_height: 240,
}

export function Matrix2x24(props: DiagramNodeProps) {
  return (
    <Shape
      {...MATRIX_2X2_4}
      {...props}
      _style={extendStyle(MATRIX_2X2_4, props)}
    />
  )
}
