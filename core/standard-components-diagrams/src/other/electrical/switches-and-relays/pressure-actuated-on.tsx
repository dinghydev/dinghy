import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRESSURE_ACTUATED_ON = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.pressureActuatedSwitch;aspect=fixed;elSwitchState=on;',
  },
  _width: 75,
  _height: 31,
}

export function PressureActuatedOn(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRESSURE_ACTUATED_ON}
      {...props}
      _style={extendStyle(PRESSURE_ACTUATED_ON, props)}
    />
  )
}
