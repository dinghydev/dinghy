import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEMPERATURE_ACTUATED_ON = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.temperatureActuatedSwitch;aspect=fixed;elSwitchState=on;',
  },
  _width: 75,
  _height: 31,
}

export function TemperatureActuatedOn(props: NodeProps) {
  return (
    <Shape
      {...TEMPERATURE_ACTUATED_ON}
      {...props}
      _style={extendStyle(TEMPERATURE_ACTUATED_ON, props)}
    />
  )
}
