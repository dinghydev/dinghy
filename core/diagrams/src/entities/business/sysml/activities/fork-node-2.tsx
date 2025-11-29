import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FORK_NODE_2 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;endArrow=none;rounded=0;startArrow=open;strokeWidth=3;startSize=12;',
  },
  _width: 1,
  _height: 80,
}

export function ForkNode2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FORK_NODE_2)} />
}
