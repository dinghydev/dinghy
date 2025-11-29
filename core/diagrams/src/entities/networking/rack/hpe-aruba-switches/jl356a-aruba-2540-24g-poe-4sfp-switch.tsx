import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL356A_ARUBA_2540_24G_POE_4SFP_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl356a_aruba_2540_24g_poeplus_4sfpplus_switch;',
  },
  _width: 142,
  _height: 15,
}

export function Jl356aAruba254024gPoe4sfpSwitch(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, JL356A_ARUBA_2540_24G_POE_4SFP_SWITCH)}
    />
  )
}
