import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL725A_ARUBA_6200F_24_PORT_1GBE_CLASS_4_POE_AND_4_PORT_SFP_370W_SWITCH =
  {
    _style: {
      entity:
        'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl725a_aruba_6200f_24_port_1gbe_class_4_poe_and_4_port_sfpplus_370w_switch;',
    },
    _width: 142,
    _height: 15,
  }

export function Jl725aAruba6200f24Port1gbeClass4PoeAnd4PortSfp370wSwitch(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL725A_ARUBA_6200F_24_PORT_1GBE_CLASS_4_POE_AND_4_PORT_SFP_370W_SWITCH}
      {...props}
      _style={extendStyle(
        JL725A_ARUBA_6200F_24_PORT_1GBE_CLASS_4_POE_AND_4_PORT_SFP_370W_SWITCH,
        props,
      )}
    />
  )
}
