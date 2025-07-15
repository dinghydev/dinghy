import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TEMPERATURE_ACTUATED_ON = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.temperatureActuatedSwitch;aspect=fixed;elSwitchState=on;',
  _width: 75,
  _height: 31,
}

export function TemperatureActuatedOn(props: DiagramNodeProps) {
  return <Shape {...TEMPERATURE_ACTUATED_ON} {...props} />
}
