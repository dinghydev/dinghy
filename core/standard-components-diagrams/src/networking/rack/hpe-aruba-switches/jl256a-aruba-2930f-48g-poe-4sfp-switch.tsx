import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL256A_ARUBA_2930F_48G_POE_4SFP_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl256a_aruba_2930f_48g_poeplus_4sfpplus_switch;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function Jl256aAruba2930f48gPoe4sfpSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL256A_ARUBA_2930F_48G_POE_4SFP_SWITCH}
      {...props}
      _style={extendStyle(JL256A_ARUBA_2930F_48G_POE_4SFP_SWITCH, props)}
    />
  )
}
