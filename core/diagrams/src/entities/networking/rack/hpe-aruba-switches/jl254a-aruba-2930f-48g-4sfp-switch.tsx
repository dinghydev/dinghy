import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL254A_ARUBA_2930F_48G_4SFP_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl254a_aruba_2930f_48g_4sfpplus_switch;',
  },
  _width: 142,
  _height: 15,
}

export function Jl254aAruba2930f48g4sfpSwitch(props: NodeProps) {
  return (
    <Shape
      {...JL254A_ARUBA_2930F_48G_4SFP_SWITCH}
      {...props}
      _style={extendStyle(JL254A_ARUBA_2930F_48G_4SFP_SWITCH, props)}
    />
  )
}
