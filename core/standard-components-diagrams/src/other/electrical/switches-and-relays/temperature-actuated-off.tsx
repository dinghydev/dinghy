import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TEMPERATURE_ACTUATED_OFF = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.temperatureActuatedSwitch;aspect=fixed;elSwitchState=off;',
  _width: 75,
  _height: 31,
}

export function TemperatureActuatedOff(props: DiagramNodeProps) {
  return <Shape {...TEMPERATURE_ACTUATED_OFF} {...props} />
}
