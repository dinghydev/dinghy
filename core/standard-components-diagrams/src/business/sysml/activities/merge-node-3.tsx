import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MERGE_NODE_3 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;verticalAlign=bottom;startArrow=open;endArrow=none;rounded=0;labelBackgroundColor=none;startSize=12;',
  },
  _original_width: 2,
  _original_height: 80,
}

export function MergeNode3(props: DiagramNodeProps) {
  return (
    <Shape
      {...MERGE_NODE_3}
      {...props}
      _style={extendStyle(MERGE_NODE_3, props)}
    />
  )
}
