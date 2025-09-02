import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const THERMOSTAT_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.thermostat2;aspect=fixed;elSwitchState=off;',
  },
  _original_width: 75,
  _original_height: 21,
}

export function ThermostatOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...THERMOSTAT_OFF}
      {...props}
      _style={extendStyle(THERMOSTAT_OFF, props)}
    />
  )
}
