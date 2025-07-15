import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const THERMOSTAT_OFF = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.thermostat2;aspect=fixed;elSwitchState=off;',
  _width: 75,
  _height: 21,
}

export function ThermostatOff(props: DiagramNodeProps) {
  return <Shape {...THERMOSTAT_OFF} {...props} />
}
