import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL559A_ARUBA_2930F_48G_POE_4SFP_740W_TAA_SWITCH_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl559a_aruba_2930f_48g_poeplus_4sfpplus_740w_taa_switch_rear;',
  },
  _width: 142,
  _height: 15,
}

export function Jl559aAruba2930f48gPoe4sfp740wTaaSwitchRear(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(
        props,
        JL559A_ARUBA_2930F_48G_POE_4SFP_740W_TAA_SWITCH_REAR,
      )}
    />
  )
}
