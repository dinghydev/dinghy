import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const J9850A_5406R_ZL2_SWITCH_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9850a_5406r_zl2_switch_rear;',
  },
  _original_width: 142,
  _original_height: 55,
}

export function J9850a5406rZl2SwitchRear(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9850A_5406R_ZL2_SWITCH_REAR}
      {...props}
      _style={extendStyle(J9850A_5406R_ZL2_SWITCH_REAR, props)}
    />
  )
}
