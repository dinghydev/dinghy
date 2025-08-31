import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL370A_ARUBA_8400_FAN_FOR_X731_FAN_TRAY = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl370a_aruba_8400_fan_for_x731_fan_tray;',
  _width: 20,
  _height: 23,
}

export function Jl370aAruba8400FanForX731FanTray(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL370A_ARUBA_8400_FAN_FOR_X731_FAN_TRAY}
      {...props}
      _style={extendStyle(JL370A_ARUBA_8400_FAN_FOR_X731_FAN_TRAY, props)}
    />
  )
}
