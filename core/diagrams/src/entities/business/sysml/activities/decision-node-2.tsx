import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DECISION_NODE_2 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;align=right;verticalAlign=bottom;endArrow=none;rounded=0;labelBackgroundColor=none;startArrow=open;startSize=12;',
  },
  _width: 1,
  _height: 80,
}

export function DecisionNode2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DECISION_NODE_2)} />
}
