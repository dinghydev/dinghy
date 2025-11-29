import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MERGE_NODE_3 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;verticalAlign=bottom;startArrow=open;endArrow=none;rounded=0;labelBackgroundColor=none;startSize=12;',
  },
  _width: 2,
  _height: 80,
}

export function MergeNode3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MERGE_NODE_3)} />
}
