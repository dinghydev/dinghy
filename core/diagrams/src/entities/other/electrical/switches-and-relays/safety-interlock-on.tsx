import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAFETY_INTERLOCK_ON = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.safetyInterlockSwitch;aspect=fixed;elSwitchState=on;',
  },
  _width: 75,
  _height: 45,
}

export function SafetyInterlockOn(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SAFETY_INTERLOCK_ON)} />
}
