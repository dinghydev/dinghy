import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JOIN_NODE_2 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;rounded=0;endArrow=open;strokeWidth=3;endSize=12;',
  },
  _width: 1,
  _height: 80,
}

export function JoinNode2(props: NodeProps) {
  return (
    <Shape
      {...JOIN_NODE_2}
      {...props}
      _style={extendStyle(JOIN_NODE_2, props)}
    />
  )
}
