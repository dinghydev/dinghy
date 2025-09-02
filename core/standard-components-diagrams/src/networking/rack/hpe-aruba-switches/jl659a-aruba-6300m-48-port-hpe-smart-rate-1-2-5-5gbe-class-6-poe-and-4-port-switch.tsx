import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL659A_ARUBA_6300M_48_PORT_HPE_SMART_RATE_1_2_5_5GBE_CLASS_6_POE_AND_4_PORT_SWITCH =
  {
    _style: {
      entity:
        'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl659a_aruba_6300m_48_port_hpe_smart_rate_1_2_5_5gbe_class_6_poe_and_4_port_switch;',
    },
    _original_width: 142,
    _original_height: 15,
  }

export function Jl659aAruba6300m48PortHpeSmartRate1255gbeClass6PoeAnd4PortSwitch(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL659A_ARUBA_6300M_48_PORT_HPE_SMART_RATE_1_2_5_5GBE_CLASS_6_POE_AND_4_PORT_SWITCH}
      {...props}
      _style={extendStyle(
        JL659A_ARUBA_6300M_48_PORT_HPE_SMART_RATE_1_2_5_5GBE_CLASS_6_POE_AND_4_PORT_SWITCH,
        props,
      )}
    />
  )
}
