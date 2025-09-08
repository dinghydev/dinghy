import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MERGE_NODE_2 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;align=right;verticalAlign=bottom;rounded=0;labelBackgroundColor=none;endArrow=open;endSize=12;',
  },
  _original_width: 1,
  _original_height: 80,
}

export function MergeNode2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MERGE_NODE_2}
      {...props}
      _style={extendStyle(MERGE_NODE_2, props)}
    />
  )
}
