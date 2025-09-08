import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MATRIX_3X3_7 = {
  _style: {
    entity:
      'html=1;fillColor=#5D7F99;strokeColor=none;shadow=0;fontSize=12;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;rounded=0;',
  },
  _original_width: 8,
  _original_height: 345,
}

export function Matrix3x37(props: DiagramNodeProps) {
  return (
    <Shape
      {...MATRIX_3X3_7}
      {...props}
      _style={extendStyle(MATRIX_3X3_7, props)}
    />
  )
}
