import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROXIMITY_LIMIT_SWITCH_ON = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.proximityLimitSwitch2;elSwitchState=on;',
  _width: 75,
  _height: 55,
}

export function ProximityLimitSwitchOn(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROXIMITY_LIMIT_SWITCH_ON}
      {...props}
      _style={extendStyle(PROXIMITY_LIMIT_SWITCH_ON, props)}
    />
  )
}
