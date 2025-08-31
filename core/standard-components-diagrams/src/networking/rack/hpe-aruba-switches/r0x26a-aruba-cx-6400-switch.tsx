import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const R0X26A_ARUBA_CX_6400_SWITCH = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.r0x26a_aruba_cx_6400_switch;',
  _width: 142,
  _height: 98,
}

export function R0x26aArubaCx6400Switch(props: DiagramNodeProps) {
  return (
    <Shape
      {...R0X26A_ARUBA_CX_6400_SWITCH}
      {...props}
      _style={extendStyle(R0X26A_ARUBA_CX_6400_SWITCH, props)}
    />
  )
}
