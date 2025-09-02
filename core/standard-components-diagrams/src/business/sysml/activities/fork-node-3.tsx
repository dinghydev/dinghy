import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FORK_NODE_3 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;endArrow=open;rounded=0;strokeWidth=3;endSize=12;',
  },
  _original_width: 2,
  _original_height: 80,
}

export function ForkNode3(props: DiagramNodeProps) {
  return (
    <Shape
      {...FORK_NODE_3}
      {...props}
      _style={extendStyle(FORK_NODE_3, props)}
    />
  )
}
