import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLOW_ACTUATED_ON = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.flowActuatedSwitch;aspect=fixed;elSwitchState=on;',
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
