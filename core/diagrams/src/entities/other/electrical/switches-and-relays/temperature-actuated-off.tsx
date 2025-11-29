import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEMPERATURE_ACTUATED_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.temperatureActuatedSwitch;aspect=fixed;elSwitchState=off;',
  },
  _width: 75,
  _height: 31,
}

export function TemperatureActuatedOff(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, TEMPERATURE_ACTUATED_OFF)} />
  )
}
