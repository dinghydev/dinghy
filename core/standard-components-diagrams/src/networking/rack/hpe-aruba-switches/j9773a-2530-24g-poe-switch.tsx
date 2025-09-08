import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const J9773A_2530_24G_POE_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9773a_2530_24g_poeplus_switch;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function J9773a253024gPoeSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9773A_2530_24G_POE_SWITCH}
      {...props}
      _style={extendStyle(J9773A_2530_24G_POE_SWITCH, props)}
    />
  )
}
