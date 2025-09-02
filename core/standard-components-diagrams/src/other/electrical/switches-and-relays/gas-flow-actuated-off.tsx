import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GAS_FLOW_ACTUATED_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.gasFlowActuatedSwitch;aspect=fixed;elSwitchState=off;',
  },
  _original_width: 75,
  _original_height: 32,
}

export function GasFlowActuatedOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...GAS_FLOW_ACTUATED_OFF}
      {...props}
      _style={extendStyle(GAS_FLOW_ACTUATED_OFF, props)}
    />
  )
}
