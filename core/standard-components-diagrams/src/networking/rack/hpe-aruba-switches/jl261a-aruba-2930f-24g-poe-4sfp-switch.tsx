import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL261A_ARUBA_2930F_24G_POE_4SFP_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl261a_aruba_2930f_24g_poeplus_4sfp_switch;',
  },
  _width: 142,
  _height: 15,
}

export function Jl261aAruba2930f24gPoe4sfpSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL261A_ARUBA_2930F_24G_POE_4SFP_SWITCH}
      {...props}
      _style={extendStyle(JL261A_ARUBA_2930F_24G_POE_4SFP_SWITCH, props)}
    />
  )
}
