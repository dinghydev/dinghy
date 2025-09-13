import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL557A_ARUBA_2930F_48G_POE_4SFP_740W_SWITCH_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl557a_aruba_2930f_48g_poeplus_4sfp_740w_switch_rear;',
  },
  _width: 142,
  _height: 15,
}

export function Jl557aAruba2930f48gPoe4sfp740wSwitchRear(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL557A_ARUBA_2930F_48G_POE_4SFP_740W_SWITCH_REAR}
      {...props}
      _style={extendStyle(
        JL557A_ARUBA_2930F_48G_POE_4SFP_740W_SWITCH_REAR,
        props,
      )}
    />
  )
}
