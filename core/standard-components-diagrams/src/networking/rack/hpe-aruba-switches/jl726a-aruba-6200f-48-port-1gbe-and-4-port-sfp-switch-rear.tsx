import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL726A_ARUBA_6200F_48_PORT_1GBE_AND_4_PORT_SFP_SWITCH_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl726a_aruba_6200f_48_port_1gbe_and_4_port_sfpplus_switch_rear;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function Jl726aAruba6200f48Port1gbeAnd4PortSfpSwitchRear(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL726A_ARUBA_6200F_48_PORT_1GBE_AND_4_PORT_SFP_SWITCH_REAR}
      {...props}
      _style={extendStyle(
        JL726A_ARUBA_6200F_48_PORT_1GBE_AND_4_PORT_SFP_SWITCH_REAR,
        props,
      )}
    />
  )
}
