import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRESSURE_ACTUATED_OFF = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.pressureActuatedSwitch;aspect=fixed;elSwitchState=off;',
  _width: 75,
  _height: 31,
}

export function PressureActuatedOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRESSURE_ACTUATED_OFF}
      {...props}
      _style={extendStyle(PRESSURE_ACTUATED_OFF, props)}
    />
  )
}
