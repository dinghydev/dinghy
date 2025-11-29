import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTROL_FLOW_2 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;endArrow=open;labelBackgroundColor=none;endSize=12;',
  },
  _width: 2,
  _height: 60,
}

export function ControlFlow2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONTROL_FLOW_2)} />
}
