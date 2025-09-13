import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL727A_ARUBA_6200F_48_PORT_1GBE_CLASS_4_POE_AND_4_PORT_SFP_370W_SWITCH =
  {
    _style: {
      entity:
        'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl727a_aruba_6200f_48_port_1gbe_class_4_poe_and_4_port_sfpplus_370w_switch;',
    },
    _width: 142,
    _height: 15,
  }

export function Jl727aAruba6200f48Port1gbeClass4PoeAnd4PortSfp370wSwitch(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL727A_ARUBA_6200F_48_PORT_1GBE_CLASS_4_POE_AND_4_PORT_SFP_370W_SWITCH}
      {...props}
      _style={extendStyle(
        JL727A_ARUBA_6200F_48_PORT_1GBE_CLASS_4_POE_AND_4_PORT_SFP_370W_SWITCH,
        props,
      )}
    />
  )
}
