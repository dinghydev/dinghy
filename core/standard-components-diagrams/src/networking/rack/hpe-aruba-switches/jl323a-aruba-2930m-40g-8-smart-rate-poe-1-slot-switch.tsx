import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL323A_ARUBA_2930M_40G_8_SMART_RATE_POE_1_SLOT_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl323a_aruba_2930m_40g_8_smart_rate_poeplus_1_slot_switch;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function Jl323aAruba2930m40g8SmartRatePoe1SlotSwitch(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL323A_ARUBA_2930M_40G_8_SMART_RATE_POE_1_SLOT_SWITCH}
      {...props}
      _style={extendStyle(
        JL323A_ARUBA_2930M_40G_8_SMART_RATE_POE_1_SLOT_SWITCH,
        props,
      )}
    />
  )
}
