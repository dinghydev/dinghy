import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JOIN_NODE_3 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;startArrow=open;endArrow=none;rounded=0;strokeWidth=3;startSize=12;',
  },
  _width: 2,
  _height: 80,
}

export function JoinNode3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, JOIN_NODE_3)} />
}
