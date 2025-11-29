import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HEX_LOOP_4 = {
  _style: {
    entity:
      'shape=hexagon;strokeWidth=4;html=1;fillColor=#1699D3;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;rounded=0;',
  },
  _width: 3,
  _height: 312,
}

export function HexLoop4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HEX_LOOP_4)} />
}
