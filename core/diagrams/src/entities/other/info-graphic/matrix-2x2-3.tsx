import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MATRIX_2X2_3 = {
  _style: {
    entity:
      'html=1;fillColor=#AE4132;strokeColor=none;shadow=0;fontSize=12;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;rounded=0;',
  },
  _width: 2,
  _height: 240,
}

export function Matrix2x23(props: DiagramNodeProps) {
  return (
    <Shape
      {...MATRIX_2X2_3}
      {...props}
      _style={extendStyle(MATRIX_2X2_3, props)}
    />
  )
}
