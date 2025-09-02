import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MATRIX_2X2_5 = {
  _style: {
    entity:
      'html=1;fillColor=#CCCCCC;strokeColor=none;shadow=0;fontSize=14;fontColor=#FFFFFF;align=center;fontStyle=1;whiteSpace=wrap;horizontal=0;rounded=0;',
  },
  _original_width: 4,
  _original_height: 240,
}

export function Matrix2x25(props: DiagramNodeProps) {
  return (
    <Shape
      {...MATRIX_2X2_5}
      {...props}
      _style={extendStyle(MATRIX_2X2_5, props)}
    />
  )
}
