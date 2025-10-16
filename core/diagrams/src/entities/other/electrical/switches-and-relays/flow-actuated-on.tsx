import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLOW_ACTUATED_ON = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.flowActuatedSwitch;aspect=fixed;elSwitchState=on;',
  },
  _width: 75,
  _height: 31,
}

export function FlowActuatedOn(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLOW_ACTUATED_ON}
      {...props}
      _style={extendStyle(FLOW_ACTUATED_ON, props)}
    />
  )
}
