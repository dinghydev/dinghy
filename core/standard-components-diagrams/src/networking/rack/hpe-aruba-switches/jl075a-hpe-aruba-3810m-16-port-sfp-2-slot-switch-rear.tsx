import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL075A_HPE_ARUBA_3810M_16_PORT_SFP_2_SLOT_SWITCH_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl075a_hpe_aruba_3810m_16_port_sfpplus_2_slot_switch_rear;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function Jl075aHpeAruba3810m16PortSfp2SlotSwitchRear(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL075A_HPE_ARUBA_3810M_16_PORT_SFP_2_SLOT_SWITCH_REAR}
      {...props}
      _style={extendStyle(
        JL075A_HPE_ARUBA_3810M_16_PORT_SFP_2_SLOT_SWITCH_REAR,
        props,
      )}
    />
  )
}
