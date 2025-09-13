import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const J9856A_2530_24G_2SFP_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9856a_2530_24g_2sfpplus_switch;',
  },
  _width: 142,
  _height: 15,
}

export function J9856a253024g2sfpSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9856A_2530_24G_2SFP_SWITCH}
      {...props}
      _style={extendStyle(J9856A_2530_24G_2SFP_SWITCH, props)}
    />
  )
}
