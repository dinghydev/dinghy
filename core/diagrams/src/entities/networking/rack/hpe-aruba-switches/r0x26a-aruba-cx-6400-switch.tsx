import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const R0X26A_ARUBA_CX_6400_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.r0x26a_aruba_cx_6400_switch;',
  },
  _width: 142,
  _height: 98,
}

export function R0x26aArubaCx6400Switch(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, R0X26A_ARUBA_CX_6400_SWITCH)}
    />
  )
}
