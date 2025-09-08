import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL321A_ARUBA_2930M_48G_1_SLOT_SWITCH_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl321a_aruba_2930m_48g_1_slot_switch_rear;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function Jl321aAruba2930m48g1SlotSwitchRear(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL321A_ARUBA_2930M_48G_1_SLOT_SWITCH_REAR}
      {...props}
      _style={extendStyle(JL321A_ARUBA_2930M_48G_1_SLOT_SWITCH_REAR, props)}
    />
  )
}
