import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FORK_NODE_2 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;endArrow=none;rounded=0;startArrow=open;strokeWidth=3;startSize=12;',
  },
  _original_width: 1,
  _original_height: 80,
}

export function ForkNode2(props: DiagramNodeProps) {
  return (
    <Shape
      {...FORK_NODE_2}
      {...props}
      _style={extendStyle(FORK_NODE_2, props)}
    />
  )
}
