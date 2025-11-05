import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const J9855A_2530_48G_2SFP_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9855a_2530_48g_2sfpplus_switch;',
  },
  _width: 142,
  _height: 15,
}

export function J9855a253048g2sfpSwitch(props: NodeProps) {
  return (
    <Shape
      {...J9855A_2530_48G_2SFP_SWITCH}
      {...props}
      _style={extendStyle(J9855A_2530_48G_2SFP_SWITCH, props)}
    />
  )
}
