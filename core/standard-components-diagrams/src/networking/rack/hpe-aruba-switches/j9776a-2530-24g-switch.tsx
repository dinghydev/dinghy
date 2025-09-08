import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const J9776A_2530_24G_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9776a_2530_24g_switch;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function J9776a253024gSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9776A_2530_24G_SWITCH}
      {...props}
      _style={extendStyle(J9776A_2530_24G_SWITCH, props)}
    />
  )
}
