import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const J9832A_5412R_ZL2_SWITCH_FAN_TRAY = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9832a_5412r_zl2_switch_fan_tray;',
  },
  _original_width: 15,
  _original_height: 96,
}

export function J9832a5412rZl2SwitchFanTray(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9832A_5412R_ZL2_SWITCH_FAN_TRAY}
      {...props}
      _style={extendStyle(J9832A_5412R_ZL2_SWITCH_FAN_TRAY, props)}
    />
  )
}
