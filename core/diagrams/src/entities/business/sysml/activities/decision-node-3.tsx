import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DECISION_NODE_3 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;verticalAlign=bottom;endArrow=open;rounded=0;labelBackgroundColor=none;endSize=12;',
  },
  _width: 2,
  _height: 80,
}

export function DecisionNode3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DECISION_NODE_3)} />
}
