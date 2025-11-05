import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL322A_ARUBA_2930M_48G_POE_1_SLOT_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl322a_aruba_2930m_48g_poeplus_1_slot_switch;',
  },
  _width: 142,
  _height: 15,
}

export function Jl322aAruba2930m48gPoe1SlotSwitch(props: NodeProps) {
  return (
    <Shape
      {...JL322A_ARUBA_2930M_48G_POE_1_SLOT_SWITCH}
      {...props}
      _style={extendStyle(JL322A_ARUBA_2930M_48G_POE_1_SLOT_SWITCH, props)}
    />
  )
}
