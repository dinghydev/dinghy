import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SWITCH_DISCONNECTOR_OFF = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.switchDisconnector;aspect=fixed;elSwitchState=off;',
  _width: 75,
  _height: 20,
}

export function SwitchDisconnectorOff(props: DiagramNodeProps) {
  return <Shape {...SWITCH_DISCONNECTOR_OFF} {...props} />
}
