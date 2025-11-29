import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAFETY_INTERLOCK_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.safetyInterlockSwitch;aspect=fixed;elSwitchState=off;',
  },
  _width: 75,
  _height: 45,
}

export function SafetyInterlockOff(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SAFETY_INTERLOCK_OFF)} />
}
