import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const J9854A_2530_24G_POE_2SFP_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9854a_2530_24g_poeplus_2sfpplus_switch;',
  },
  _width: 142,
  _height: 15,
}

export function J9854a253024gPoe2sfpSwitch(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, J9854A_2530_24G_POE_2SFP_SWITCH)}
    />
  )
}
