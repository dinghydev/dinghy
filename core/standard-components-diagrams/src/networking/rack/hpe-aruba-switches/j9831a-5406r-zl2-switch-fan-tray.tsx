import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const J9831A_5406R_ZL2_SWITCH_FAN_TRAY = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9831a_5406r_zl2_switch_fan_tray;',
  },
  _original_width: 15,
  _original_height: 53,
}

export function J9831a5406rZl2SwitchFanTray(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9831A_5406R_ZL2_SWITCH_FAN_TRAY}
      {...props}
      _style={extendStyle(J9831A_5406R_ZL2_SWITCH_FAN_TRAY, props)}
    />
  )
}
