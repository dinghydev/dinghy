import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROXIMITY_LIMIT_SWITCH_OFF = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.proximityLimitSwitch2;elSwitchState=off;',
  _width: 75,
  _height: 55,
}

export function ProximityLimitSwitchOff(props: DiagramNodeProps) {
  return <Shape {...PROXIMITY_LIMIT_SWITCH_OFF} {...props} />
}
