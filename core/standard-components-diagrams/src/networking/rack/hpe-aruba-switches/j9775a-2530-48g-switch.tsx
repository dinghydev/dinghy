import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const J9775A_2530_48G_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9775a_2530_48g_switch;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function J9775a253048gSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9775A_2530_48G_SWITCH}
      {...props}
      _style={extendStyle(J9775A_2530_48G_SWITCH, props)}
    />
  )
}
