import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TEMPERATURE_ACTUATED_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.temperatureActuatedSwitch;aspect=fixed;elSwitchState=off;',
  },
  _width: 75,
  _height: 31,
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
