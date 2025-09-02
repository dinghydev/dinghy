import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const J9821A_540R_ZL2_SWITCH_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9821a_540r_zl2_switch_rear;',
  },
  _original_width: 142,
  _original_height: 56,
}

export function J9821a540rZl2SwitchRear(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9821A_540R_ZL2_SWITCH_REAR}
      {...props}
      _style={extendStyle(J9821A_540R_ZL2_SWITCH_REAR, props)}
    />
  )
}
