import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SWITCH_DISCONNECTOR_ON = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.switchDisconnector;aspect=fixed;elSwitchState=on;',
  _width: 75,
  _height: 20,
}

export function SwitchDisconnectorOn(props: DiagramNodeProps) {
  return <Shape {...SWITCH_DISCONNECTOR_ON} {...props} />
}
