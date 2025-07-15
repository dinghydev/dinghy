import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TEMPERATURE_SWITCH_OFF = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.temperatureSwitch;aspect=fixed;elSwitchState=off;',
  _width: 75,
  _height: 18,
}

export function TemperatureSwitchOff(props: DiagramNodeProps) {
  return <Shape {...TEMPERATURE_SWITCH_OFF} {...props} />
}
