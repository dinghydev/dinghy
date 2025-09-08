import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL076A_HPE_ARUBA_3810M_40_PORT_GT_POE_8_PORT_1_2_5_5_10GBASE_T_POE_1_SLOT_SWITCH =
  {
    _style: {
      entity:
        'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl076a_hpe_aruba_3810m_40_port_gt_poeplus_8_port_1_2_5_5_10gbase_t_poeplus_1_slot_switch;',
    },
    _original_width: 142,
    _original_height: 15,
  }

export function Jl076aHpeAruba3810m40PortGtPoe8Port125510gbaseTPoe1SlotSwitch(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL076A_HPE_ARUBA_3810M_40_PORT_GT_POE_8_PORT_1_2_5_5_10GBASE_T_POE_1_SLOT_SWITCH}
      {...props}
      _style={extendStyle(
        JL076A_HPE_ARUBA_3810M_40_PORT_GT_POE_8_PORT_1_2_5_5_10GBASE_T_POE_1_SLOT_SWITCH,
        props,
      )}
    />
  )
}
