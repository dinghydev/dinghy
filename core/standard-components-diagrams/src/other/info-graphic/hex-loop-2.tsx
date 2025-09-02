import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEX_LOOP_2 = {
  _style: {
    entity:
      'shape=hexagon;strokeWidth=4;html=1;fillColor=#E85642;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;rounded=0;',
  },
  _original_width: 1,
  _original_height: 312,
}

export function HexLoop2(props: DiagramNodeProps) {
  return (
    <Shape {...HEX_LOOP_2} {...props} _style={extendStyle(HEX_LOOP_2, props)} />
  )
}
