import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINGLE_SWITCH_ON = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.singleSwitch;aspect=fixed;elSwitchState=on;',
  _width: 75,
  _height: 20,
}

export function SingleSwitchOn(props: DiagramNodeProps) {
  return <Shape {...SINGLE_SWITCH_ON} {...props} />
}
