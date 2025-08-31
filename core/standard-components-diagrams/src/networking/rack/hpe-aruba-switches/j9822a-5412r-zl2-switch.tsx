import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const J9822A_5412R_ZL2_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9822a_5412r_zl2_switch;',
  },
  _width: 142,
  _height: 98,
}

export function J9822a5412rZl2Switch(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9822A_5412R_ZL2_SWITCH}
      {...props}
      _style={extendStyle(J9822A_5412R_ZL2_SWITCH, props)}
    />
  )
}
