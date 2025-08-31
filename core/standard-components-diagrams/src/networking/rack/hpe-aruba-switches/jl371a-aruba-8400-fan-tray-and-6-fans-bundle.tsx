import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL371A_ARUBA_8400_FAN_TRAY_AND_6_FANS_BUNDLE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl371a_aruba8400_fan_tray_and_6_fans_bundle;',
  },
  _width: 142,
  _height: 27,
}

export function Jl371aAruba8400FanTrayAnd6FansBundle(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL371A_ARUBA_8400_FAN_TRAY_AND_6_FANS_BUNDLE}
      {...props}
      _style={extendStyle(JL371A_ARUBA_8400_FAN_TRAY_AND_6_FANS_BUNDLE, props)}
    />
  )
}
