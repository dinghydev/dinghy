import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL071A_HPE_ARUBA_3810M_24_PORT_GT_1_SLOT_SWITCH = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl071a_hpe_aruba_3810m_24_port_gt_1_slot_switch;',
  _width: 142,
  _height: 15,
}

export function Jl071aHpeAruba3810m24PortGt1SlotSwitch(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL071A_HPE_ARUBA_3810M_24_PORT_GT_1_SLOT_SWITCH}
      {...props}
      _style={extendStyle(
        JL071A_HPE_ARUBA_3810M_24_PORT_GT_1_SLOT_SWITCH,
        props,
      )}
    />
  )
}
