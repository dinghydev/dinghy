import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLOW_ACTUATED_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.flowActuatedSwitch;aspect=fixed;elSwitchState=off;',
  },
  _width: 75,
  _height: 31,
}

export function FlowActuatedOff(props: NodeProps) {
  return (
    <Shape
      {...FLOW_ACTUATED_OFF}
      {...props}
      _style={extendStyle(FLOW_ACTUATED_OFF, props)}
    />
  )
}
