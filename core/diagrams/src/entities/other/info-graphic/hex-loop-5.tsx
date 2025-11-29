import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HEX_LOOP_5 = {
  _style: {
    entity:
      'shape=hexagon;strokeWidth=4;html=1;fillColor=#736CA8;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;rounded=0;',
  },
  _width: 4,
  _height: 312,
}

export function HexLoop5(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HEX_LOOP_5)} />
}
