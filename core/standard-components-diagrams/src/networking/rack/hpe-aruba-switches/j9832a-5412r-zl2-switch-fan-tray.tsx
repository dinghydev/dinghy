import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const J9832A_5412R_ZL2_SWITCH_FAN_TRAY = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9832a_5412r_zl2_switch_fan_tray;',
  _width: 15,
  _height: 96,
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
