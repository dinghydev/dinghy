import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SAFETY_INTERLOCK_ON = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.safetyInterlockSwitch;aspect=fixed;elSwitchState=on;',
  },
  _original_width: 75,
  _original_height: 45,
}

export function SafetyInterlockOn(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAFETY_INTERLOCK_ON}
      {...props}
      _style={extendStyle(SAFETY_INTERLOCK_ON, props)}
    />
  )
}
