import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JOIN_NODE_3 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;startArrow=open;endArrow=none;rounded=0;strokeWidth=3;startSize=12;',
  },
  _original_width: 2,
  _original_height: 80,
}

export function JoinNode3(props: DiagramNodeProps) {
  return (
    <Shape
      {...JOIN_NODE_3}
      {...props}
      _style={extendStyle(JOIN_NODE_3, props)}
    />
  )
}
