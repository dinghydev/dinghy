import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL072A_HPE_ARUBA_3810M_48_PORT_GT_1_SLOT_SWITCH_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl072a_hpe_aruba_3810m_48_port_gt_1_slot_switch_rear;',
  },
  _width: 142,
  _height: 15,
}

export function Jl072aHpeAruba3810m48PortGt1SlotSwitchRear(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL072A_HPE_ARUBA_3810M_48_PORT_GT_1_SLOT_SWITCH_REAR}
      {...props}
      _style={extendStyle(
        JL072A_HPE_ARUBA_3810M_48_PORT_GT_1_SLOT_SWITCH_REAR,
        props,
      )}
    />
  )
}
