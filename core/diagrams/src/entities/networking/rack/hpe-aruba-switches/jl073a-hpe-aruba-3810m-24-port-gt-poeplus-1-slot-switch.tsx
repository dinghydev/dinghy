import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL073A_HPE_ARUBA_3810M_24_PORT_GT_POEPLUS_1_SLOT_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl073a_hpe_aruba_3810m_24_port_gt_poeplus_1_slot_switch;',
  },
  _width: 142,
  _height: 15,
}

export function Jl073aHpeAruba3810m24PortGtPoeplus1SlotSwitch(
  props: NodeProps,
) {
  return (
    <Shape
      {...JL073A_HPE_ARUBA_3810M_24_PORT_GT_POEPLUS_1_SLOT_SWITCH}
      {...props}
      _style={extendStyle(
        JL073A_HPE_ARUBA_3810M_24_PORT_GT_POEPLUS_1_SLOT_SWITCH,
        props,
      )}
    />
  )
}
