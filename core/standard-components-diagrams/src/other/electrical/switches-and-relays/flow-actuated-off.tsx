import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLOW_ACTUATED_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.flowActuatedSwitch;aspect=fixed;elSwitchState=off;',
  },
  _original_width: 75,
  _original_height: 31,
}

export function FlowActuatedOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLOW_ACTUATED_OFF}
      {...props}
      _style={extendStyle(FLOW_ACTUATED_OFF, props)}
    />
  )
}
