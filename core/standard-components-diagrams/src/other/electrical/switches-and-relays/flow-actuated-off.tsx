import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FLOW_ACTUATED_OFF = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.flowActuatedSwitch;aspect=fixed;elSwitchState=off;',
  _width: 75,
  _height: 31,
}

export function FlowActuatedOff(props: DiagramNodeProps) {
  return <Shape {...FLOW_ACTUATED_OFF} {...props} />
}
