import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL319A_ARUBA_2930M_24G_1_SLOT_SWITCH_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl319a_aruba_2930m_24g_1_slot_switch_rear;',
  },
  _width: 142,
  _height: 15,
}

export function Jl319aAruba2930m24g1SlotSwitchRear(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, JL319A_ARUBA_2930M_24G_1_SLOT_SWITCH_REAR)}
    />
  )
}
