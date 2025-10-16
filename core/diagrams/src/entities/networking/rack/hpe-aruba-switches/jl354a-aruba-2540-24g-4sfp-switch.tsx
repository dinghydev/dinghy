import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL354A_ARUBA_2540_24G_4SFP_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl354a_aruba_2540_24g_4sfpplus_switch;',
  },
  _width: 142,
  _height: 15,
}

export function Jl354aAruba254024g4sfpSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL354A_ARUBA_2540_24G_4SFP_SWITCH}
      {...props}
      _style={extendStyle(JL354A_ARUBA_2540_24G_4SFP_SWITCH, props)}
    />
  )
}
