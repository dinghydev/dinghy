import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL260A_ARUBA_2930F_48G_4SFP_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl260a_aruba_2930f_48g_4sfp_switch;',
  },
  _width: 142,
  _height: 15,
}

export function Jl260aAruba2930f48g4sfpSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL260A_ARUBA_2930F_48G_4SFP_SWITCH}
      {...props}
      _style={extendStyle(JL260A_ARUBA_2930F_48G_4SFP_SWITCH, props)}
    />
  )
}
