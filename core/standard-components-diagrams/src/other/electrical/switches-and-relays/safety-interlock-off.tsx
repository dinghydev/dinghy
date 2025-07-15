import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SAFETY_INTERLOCK_OFF = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.safetyInterlockSwitch;aspect=fixed;elSwitchState=off;',
  _width: 75,
  _height: 45,
}

export function SafetyInterlockOff(props: DiagramNodeProps) {
  return <Shape {...SAFETY_INTERLOCK_OFF} {...props} />
}
