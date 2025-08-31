import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL660A_ARUBA_6300M_24_PORT_HPE_SMART_RATE_1_2_5_5_GBE_CLASS_6_POE_AND_4_PORT_SWITCH =
  {
    _style: {
      entity:
        'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl660a_aruba_6300m_24_port_hpe_smart_rate_1_2_5_5_gbe_class_6_poe_and_4_port_switch;',
    },
    _width: 142,
    _height: 15,
  }

export function Jl660aAruba6300m24PortHpeSmartRate1255GbeClass6PoeAnd4PortSwitch(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL660A_ARUBA_6300M_24_PORT_HPE_SMART_RATE_1_2_5_5_GBE_CLASS_6_POE_AND_4_PORT_SWITCH}
      {...props}
      _style={extendStyle(
        JL660A_ARUBA_6300M_24_PORT_HPE_SMART_RATE_1_2_5_5_GBE_CLASS_6_POE_AND_4_PORT_SWITCH,
        props,
      )}
    />
  )
}
