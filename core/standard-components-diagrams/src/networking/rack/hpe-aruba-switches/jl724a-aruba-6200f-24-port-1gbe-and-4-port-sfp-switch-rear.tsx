import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL724A_ARUBA_6200F_24_PORT_1GBE_AND_4_PORT_SFP_SWITCH_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl724a_aruba_6200f_24_port_1gbe_and_4_port_sfpplus_switch_rear;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function Jl724aAruba6200f24Port1gbeAnd4PortSfpSwitchRear(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL724A_ARUBA_6200F_24_PORT_1GBE_AND_4_PORT_SFP_SWITCH_REAR}
      {...props}
      _style={extendStyle(
        JL724A_ARUBA_6200F_24_PORT_1GBE_AND_4_PORT_SFP_SWITCH_REAR,
        props,
      )}
    />
  )
}
