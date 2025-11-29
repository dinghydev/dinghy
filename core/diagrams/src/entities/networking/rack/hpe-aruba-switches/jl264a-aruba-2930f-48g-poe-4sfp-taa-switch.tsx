import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL264A_ARUBA_2930F_48G_POE_4SFP_TAA_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl264a_aruba_2930f_48g_poeplus_4sfpplus_taa_switch;',
  },
  _width: 142,
  _height: 15,
}

export function Jl264aAruba2930f48gPoe4sfpTaaSwitch(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, JL264A_ARUBA_2930F_48G_POE_4SFP_TAA_SWITCH)}
    />
  )
}
