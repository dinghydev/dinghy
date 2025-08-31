import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEMPERATURE_SWITCH_ON = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.temperatureSwitch;aspect=fixed;elSwitchState=on;',
  _width: 75,
  _height: 18,
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
