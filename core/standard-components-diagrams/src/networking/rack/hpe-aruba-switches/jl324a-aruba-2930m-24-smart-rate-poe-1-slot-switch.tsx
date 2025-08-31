import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL324A_ARUBA_2930M_24_SMART_RATE_POE_1_SLOT_SWITCH = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl324a_aruba_2930m_24_smart_rate_poeplus_1_slot_switch;',
  _width: 142,
  _height: 15,
}

export function Jl324aAruba2930m24SmartRatePoe1SlotSwitch(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL324A_ARUBA_2930M_24_SMART_RATE_POE_1_SLOT_SWITCH}
      {...props}
      _style={extendStyle(
        JL324A_ARUBA_2930M_24_SMART_RATE_POE_1_SLOT_SWITCH,
        props,
      )}
    />
  )
}
