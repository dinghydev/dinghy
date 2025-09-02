import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL320A_ARUBA_2930M_24G_POE_1_SLOT_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl320a_aruba_2930m_24g_poeplus_1_slot_switch;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function Jl320aAruba2930m24gPoe1SlotSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL320A_ARUBA_2930M_24G_POE_1_SLOT_SWITCH}
      {...props}
      _style={extendStyle(JL320A_ARUBA_2930M_24G_POE_1_SLOT_SWITCH, props)}
    />
  )
}
