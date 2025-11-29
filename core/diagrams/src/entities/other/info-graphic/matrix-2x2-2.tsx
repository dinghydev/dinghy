import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MATRIX_2X2_2 = {
  _style: {
    entity:
      'html=1;fillColor=#F2931E;strokeColor=none;shadow=0;fontSize=12;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;rounded=0;',
  },
  _width: 1,
  _height: 240,
}

export function Matrix2x22(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MATRIX_2X2_2)} />
}
