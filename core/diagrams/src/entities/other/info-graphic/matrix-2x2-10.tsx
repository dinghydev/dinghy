import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MATRIX_2X2_10 = {
  _style: {
    entity:
      'shape=mxgraph.basic.three_corner_round_rect;dx=18;flipV=1;html=1;fillColor=#23445D;strokeColor=none;shadow=0;fontSize=12;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;rounded=0;',
  },
  _width: 3,
  _height: 240,
}

export function Matrix2x210(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MATRIX_2X2_10)} />
}
