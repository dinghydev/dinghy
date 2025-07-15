import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const THERMOSTAT_ON = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.thermostat2;aspect=fixed;elSwitchState=on;',
  _width: 75,
  _height: 21,
}

export function ThermostatOn(props: DiagramNodeProps) {
  return <Shape {...THERMOSTAT_ON} {...props} />
}
