import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TEMPERATURE_SWITCH_ON = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.temperatureSwitch;aspect=fixed;elSwitchState=on;',
  },
  _original_width: 75,
  _original_height: 18,
}

export function TemperatureSwitchOn(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEMPERATURE_SWITCH_ON}
      {...props}
      _style={extendStyle(TEMPERATURE_SWITCH_ON, props)}
    />
  )
}
