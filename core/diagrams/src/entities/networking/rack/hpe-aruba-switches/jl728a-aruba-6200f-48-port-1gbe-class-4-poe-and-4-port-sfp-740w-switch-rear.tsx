import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL728A_ARUBA_6200F_48_PORT_1GBE_CLASS_4_POE_AND_4_PORT_SFP_740W_SWITCH_REAR =
  {
    _style: {
      entity:
        'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl728a_aruba_6200f_48_port_1gbe_class_4_poe_and_4_port_sfpplus_740w_switch_rear;',
    },
    _width: 142,
    _height: 15,
  }

export function Jl728aAruba6200f48Port1gbeClass4PoeAnd4PortSfp740wSwitchRear(
  props: NodeProps,
) {
  return (
    <Shape
      {...JL728A_ARUBA_6200F_48_PORT_1GBE_CLASS_4_POE_AND_4_PORT_SFP_740W_SWITCH_REAR}
      {...props}
      _style={extendStyle(
        JL728A_ARUBA_6200F_48_PORT_1GBE_CLASS_4_POE_AND_4_PORT_SFP_740W_SWITCH_REAR,
        props,
      )}
    />
  )
}
