import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HEX_LOOP_7 = {
  _style: {
    entity:
      'shape=hexagon;strokeWidth=4;html=1;fillColor=#777777;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;rounded=0;',
  },
  _original_width: 6,
  _original_height: 312,
}

export function HexLoop7(props: DiagramNodeProps) {
  return (
    <Shape {...HEX_LOOP_7} {...props} _style={extendStyle(HEX_LOOP_7, props)} />
  )
}
