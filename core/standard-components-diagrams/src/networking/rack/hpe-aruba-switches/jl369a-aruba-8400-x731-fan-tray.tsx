import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL369A_ARUBA_8400_X731_FAN_TRAY = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl369a_aruba_8400_x731_fan_tray;',
  },
  _original_width: 142,
  _original_height: 27,
}

export function Jl369aAruba8400X731FanTray(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL369A_ARUBA_8400_X731_FAN_TRAY}
      {...props}
      _style={extendStyle(JL369A_ARUBA_8400_X731_FAN_TRAY, props)}
    />
  )
}
