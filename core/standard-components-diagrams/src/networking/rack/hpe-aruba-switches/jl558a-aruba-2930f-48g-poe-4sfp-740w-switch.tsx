import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL558A_ARUBA_2930F_48G_POE_4SFP_740W_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl558a_aruba_2930f_48g_poeplus_4sfpplus_740w_switch;',
  },
  _width: 142,
  _height: 15,
}

export function Jl558aAruba2930f48gPoe4sfp740wSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL558A_ARUBA_2930F_48G_POE_4SFP_740W_SWITCH}
      {...props}
      _style={extendStyle(JL558A_ARUBA_2930F_48G_POE_4SFP_740W_SWITCH, props)}
    />
  )
}
