import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAFETY_INTERLOCK_ON = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.safetyInterlockSwitch;aspect=fixed;elSwitchState=on;',
  _width: 75,
  _height: 45,
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
