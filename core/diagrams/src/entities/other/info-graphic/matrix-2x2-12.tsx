import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MATRIX_2X2_12 = {
  _style: {
    entity:
      'rounded=1;arcSize=50;html=1;fillColor=#CCCCCC;strokeColor=none;shadow=0;fontSize=14;fontColor=#FFFFFF;align=center;fontStyle=1;whiteSpace=wrap;',
  },
  _width: 6,
  _height: 240,
}

export function Matrix2x212(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MATRIX_2X2_12)} />
}
