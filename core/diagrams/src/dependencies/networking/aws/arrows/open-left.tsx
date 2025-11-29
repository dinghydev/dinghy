import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPEN_LEFT = {
  _style: {
    dependency:
      'edgeStyle=orthogonalEdgeStyle;html=1;endArrow=none;elbow=vertical;startArrow=open;startFill=0;strokeColor=#545B64;rounded=0;',
  },
}

export function OpenLeft(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, OPEN_LEFT)} />
}
