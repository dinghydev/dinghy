import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL724A_ARUBA_6200F_24_PORT_1GBE_AND_4_PORT_SFP_SWITCH_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl724a_aruba_6200f_24_port_1gbe_and_4_port_sfpplus_switch_rear;',
  },
  _width: 142,
  _height: 15,
}

export function Jl724aAruba6200f24Port1gbeAnd4PortSfpSwitchRear(
  props: NodeProps,
) {
  return (
    <Shape
      {...props}
      _style={extendStyle(
        props,
        JL724A_ARUBA_6200F_24_PORT_1GBE_AND_4_PORT_SFP_SWITCH_REAR,
      )}
    />
  )
}
