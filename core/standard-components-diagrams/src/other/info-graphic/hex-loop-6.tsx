import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEX_LOOP_6 = {
  _style: {
    entity:
      'shape=hexagon;strokeWidth=4;html=1;fillColor=#2F5B7C;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;rounded=0;',
  },
  _original_width: 5,
  _original_height: 312,
}

export function HexLoop6(props: DiagramNodeProps) {
  return (
    <Shape {...HEX_LOOP_6} {...props} _style={extendStyle(HEX_LOOP_6, props)} />
  )
}
