import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL559A_ARUBA_2930F_48G_POE_4SFP_740W_TAA_SWITCH_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl559a_aruba_2930f_48g_poeplus_4sfpplus_740w_taa_switch_rear;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function Jl559aAruba2930f48gPoe4sfp740wTaaSwitchRear(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL559A_ARUBA_2930F_48G_POE_4SFP_740W_TAA_SWITCH_REAR}
      {...props}
      _style={extendStyle(
        JL559A_ARUBA_2930F_48G_POE_4SFP_740W_TAA_SWITCH_REAR,
        props,
      )}
    />
  )
}
