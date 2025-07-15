import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINGLE_SWITCH_OFF = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.singleSwitch;aspect=fixed;elSwitchState=off;',
  _width: 75,
  _height: 20,
}

export function SingleSwitchOff(props: DiagramNodeProps) {
  return <Shape {...SINGLE_SWITCH_OFF} {...props} />
}
