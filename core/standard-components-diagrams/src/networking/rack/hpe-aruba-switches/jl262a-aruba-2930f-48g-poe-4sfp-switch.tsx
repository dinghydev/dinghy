import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL262A_ARUBA_2930F_48G_POE_4SFP_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl262a_aruba_2930f_48g_poeplus_4sfp_switch;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function Jl262aAruba2930f48gPoe4sfpSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL262A_ARUBA_2930F_48G_POE_4SFP_SWITCH}
      {...props}
      _style={extendStyle(JL262A_ARUBA_2930F_48G_POE_4SFP_SWITCH, props)}
    />
  )
}
