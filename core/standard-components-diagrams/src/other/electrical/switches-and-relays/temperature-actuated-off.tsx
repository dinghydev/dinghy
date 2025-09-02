import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEMPERATURE_ACTUATED_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.temperatureActuatedSwitch;aspect=fixed;elSwitchState=off;',
  },
  _original_width: 75,
  _original_height: 31,
}

export function TemperatureActuatedOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEMPERATURE_ACTUATED_OFF}
      {...props}
      _style={extendStyle(TEMPERATURE_ACTUATED_OFF, props)}
    />
  )
}
