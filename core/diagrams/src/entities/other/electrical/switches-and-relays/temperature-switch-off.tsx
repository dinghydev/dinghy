import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEMPERATURE_SWITCH_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.temperatureSwitch;aspect=fixed;elSwitchState=off;',
  },
  _width: 75,
  _height: 18,
}

export function TemperatureSwitchOff(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, TEMPERATURE_SWITCH_OFF)} />
  )
}
