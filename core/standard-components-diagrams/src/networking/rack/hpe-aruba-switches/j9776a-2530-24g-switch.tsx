import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const J9776A_2530_24G_SWITCH = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9776a_2530_24g_switch;',
  _width: 142,
  _height: 15,
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
