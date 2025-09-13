import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GAS_FLOW_ACTUATED_ON = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.gasFlowActuatedSwitch;aspect=fixed;elSwitchState=on;',
  },
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
