import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL263A_ARUBA_2930F_24G_POE_4SFP_TAA_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl263a_aruba_2930f_24g_poeplus_4sfpplus_taa_switch;',
  },
  _width: 142,
  _height: 15,
}

export function Jl263aAruba2930f24gPoe4sfpTaaSwitch(props: NodeProps) {
  return (
    <Shape
      {...JL263A_ARUBA_2930F_24G_POE_4SFP_TAA_SWITCH}
      {...props}
      _style={extendStyle(JL263A_ARUBA_2930F_24G_POE_4SFP_TAA_SWITCH, props)}
    />
  )
}
