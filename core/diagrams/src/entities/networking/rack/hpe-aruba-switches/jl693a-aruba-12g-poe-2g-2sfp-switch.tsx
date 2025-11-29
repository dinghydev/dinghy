import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL693A_ARUBA_12G_POE_2G_2SFP_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl693a_aruba_12g_poeplus_2g_2sfpplus_switch;',
  },
  _width: 82,
  _height: 15,
}

export function Jl693aAruba12gPoe2g2sfpSwitch(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, JL693A_ARUBA_12G_POE_2G_2SFP_SWITCH)}
    />
  )
}
