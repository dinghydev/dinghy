import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SAFETY_INTERLOCK_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.safetyInterlockSwitch;aspect=fixed;elSwitchState=off;',
  },
  _width: 75,
  _height: 45,
}

export function SafetyInterlockOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAFETY_INTERLOCK_OFF}
      {...props}
      _style={extendStyle(SAFETY_INTERLOCK_OFF, props)}
    />
  )
}
