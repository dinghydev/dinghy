import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL693A_ARUBA_12G_POE_2G_2SFP_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl693a_aruba_12g_poeplus_2g_2sfpplus_switch;',
  },
  _original_width: 82,
  _original_height: 15,
}

export function Jl693aAruba12gPoe2g2sfpSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL693A_ARUBA_12G_POE_2G_2SFP_SWITCH}
      {...props}
      _style={extendStyle(JL693A_ARUBA_12G_POE_2G_2SFP_SWITCH, props)}
    />
  )
}
