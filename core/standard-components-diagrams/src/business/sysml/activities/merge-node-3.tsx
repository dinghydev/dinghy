import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MERGE_NODE_3 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;verticalAlign=bottom;startArrow=open;endArrow=none;rounded=0;labelBackgroundColor=none;startSize=12;',
  _width: 2,
  _height: 80,
}

export function MergeNode3(props: DiagramNodeProps) {
  return <Shape {...MERGE_NODE_3} {...props} />
}
