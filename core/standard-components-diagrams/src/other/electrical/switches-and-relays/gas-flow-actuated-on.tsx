import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GAS_FLOW_ACTUATED_ON = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.gasFlowActuatedSwitch;aspect=fixed;elSwitchState=on;',
  _width: 75,
  _height: 32,
}

export function GasFlowActuatedOn(props: DiagramNodeProps) {
  return (
    <Shape
      {...GAS_FLOW_ACTUATED_ON}
      {...props}
      _style={extendStyle(GAS_FLOW_ACTUATED_ON, props)}
    />
  )
}
