import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PRESSURE_ACTUATED_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.pressureActuatedSwitch;aspect=fixed;elSwitchState=off;',
  },
  _original_width: 75,
  _original_height: 31,
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
