import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MATRIX_2X2 = {
  _style: {
    entity:
      'html=1;fillColor=#10739E;strokeColor=none;shadow=0;fontSize=12;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;rounded=0;',
  },
  _width: 0,
  _height: 240,
}

export function Matrix2x2(props: DiagramNodeProps) {
  return (
    <Shape {...MATRIX_2X2} {...props} _style={extendStyle(MATRIX_2X2, props)} />
  )
}
