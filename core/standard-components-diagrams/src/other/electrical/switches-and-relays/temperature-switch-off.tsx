import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEMPERATURE_SWITCH_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.temperatureSwitch;aspect=fixed;elSwitchState=off;',
  },
  _original_width: 75,
  _original_height: 18,
}

export function TemperatureSwitchOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEMPERATURE_SWITCH_OFF}
      {...props}
      _style={extendStyle(TEMPERATURE_SWITCH_OFF, props)}
    />
  )
}
