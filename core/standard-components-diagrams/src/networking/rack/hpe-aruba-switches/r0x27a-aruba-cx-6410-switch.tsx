import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const R0X27A_ARUBA_CX_6410_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.r0x27a_aruba_cx_6410_switch;',
  },
  _original_width: 142,
  _original_height: 169,
}

export function R0x27aArubaCx6410Switch(props: DiagramNodeProps) {
  return (
    <Shape
      {...R0X27A_ARUBA_CX_6410_SWITCH}
      {...props}
      _style={extendStyle(R0X27A_ARUBA_CX_6410_SWITCH, props)}
    />
  )
}
