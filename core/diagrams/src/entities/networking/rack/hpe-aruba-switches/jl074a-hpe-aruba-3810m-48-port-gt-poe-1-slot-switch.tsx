import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL074A_HPE_ARUBA_3810M_48_PORT_GT_POE_1_SLOT_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl074a_hpe_aruba_3810m_48_port_gt_poeplus_1_slot_switch;',
  },
  _width: 142,
  _height: 15,
}

export function Jl074aHpeAruba3810m48PortGtPoe1SlotSwitch(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL074A_HPE_ARUBA_3810M_48_PORT_GT_POE_1_SLOT_SWITCH}
      {...props}
      _style={extendStyle(
        JL074A_HPE_ARUBA_3810M_48_PORT_GT_POE_1_SLOT_SWITCH,
        props,
      )}
    />
  )
}
