import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FORK_NODE_3 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;endArrow=open;rounded=0;strokeWidth=3;endSize=12;',
  },
  _width: 2,
  _height: 80,
}

export function ForkNode3(props: NodeProps) {
  return (
    <Shape
      {...FORK_NODE_3}
      {...props}
      _style={extendStyle(FORK_NODE_3, props)}
    />
  )
}
