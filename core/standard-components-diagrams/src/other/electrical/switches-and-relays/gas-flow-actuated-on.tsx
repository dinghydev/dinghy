import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GAS_FLOW_ACTUATED_ON = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.gasFlowActuatedSwitch;aspect=fixed;elSwitchState=on;',
  _width: 75,
  _height: 32,
}

export function GasFlowActuatedOn(props: DiagramNodeProps) {
  return <Shape {...GAS_FLOW_ACTUATED_ON} {...props} />
}
