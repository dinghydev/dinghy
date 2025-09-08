import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL355A_ARUBA_2540_48G_4SFP_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl355a_aruba_2540_48g_4sfpplus_switch;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function Jl355aAruba254048g4sfpSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL355A_ARUBA_2540_48G_4SFP_SWITCH}
      {...props}
      _style={extendStyle(JL355A_ARUBA_2540_48G_4SFP_SWITCH, props)}
    />
  )
}
