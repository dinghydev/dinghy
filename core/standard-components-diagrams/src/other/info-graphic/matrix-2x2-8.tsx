import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MATRIX_2X2_8 = {
  _style: {
    entity:
      'shape=mxgraph.basic.three_corner_round_rect;dx=18;html=1;fillColor=#F2931E;strokeColor=none;shadow=0;fontSize=12;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;rounded=0;',
  },
  _original_width: 1,
  _original_height: 240,
}

export function Matrix2x28(props: DiagramNodeProps) {
  return (
    <Shape
      {...MATRIX_2X2_8}
      {...props}
      _style={extendStyle(MATRIX_2X2_8, props)}
    />
  )
}
