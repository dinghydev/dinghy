import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL253A_ARUBA_2930F_24G_4SFP_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl253a_aruba_2930f_24g_4sfpplus_switch;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function Jl253aAruba2930f24g4sfpSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL253A_ARUBA_2930F_24G_4SFP_SWITCH}
      {...props}
      _style={extendStyle(JL253A_ARUBA_2930F_24G_4SFP_SWITCH, props)}
    />
  )
}
