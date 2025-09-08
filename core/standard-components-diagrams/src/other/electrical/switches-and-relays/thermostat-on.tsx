import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const THERMOSTAT_ON = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.thermostat2;aspect=fixed;elSwitchState=on;',
  },
  _original_width: 75,
  _original_height: 21,
}

export function ThermostatOn(props: DiagramNodeProps) {
  return (
    <Shape
      {...THERMOSTAT_ON}
      {...props}
      _style={extendStyle(THERMOSTAT_ON, props)}
    />
  )
}
