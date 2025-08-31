import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const J9851A_5412R_ZL2_SWITCH_REAR = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9851a_5412r_zl2_switch_rear;',
  _width: 142,
  _height: 98,
}

export function J9851a5412rZl2SwitchRear(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9851A_5412R_ZL2_SWITCH_REAR}
      {...props}
      _style={extendStyle(J9851A_5412R_ZL2_SWITCH_REAR, props)}
    />
  )
}
