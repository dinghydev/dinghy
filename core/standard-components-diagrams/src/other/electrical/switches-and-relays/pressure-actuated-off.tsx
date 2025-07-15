import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRESSURE_ACTUATED_OFF = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.pressureActuatedSwitch;aspect=fixed;elSwitchState=off;',
  _width: 75,
  _height: 31,
}

export function PressureActuatedOff(props: DiagramNodeProps) {
  return <Shape {...PRESSURE_ACTUATED_OFF} {...props} />
}
