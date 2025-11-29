import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRESSURE_ACTUATED_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.pressureActuatedSwitch;aspect=fixed;elSwitchState=off;',
  },
  _width: 75,
  _height: 31,
}

export function PressureActuatedOff(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PRESSURE_ACTUATED_OFF)} />
}
