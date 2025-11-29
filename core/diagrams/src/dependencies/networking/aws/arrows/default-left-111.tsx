import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEFAULT_LEFT_111 = {
  _style: {
    dependency:
      'edgeStyle=orthogonalEdgeStyle;html=1;endArrow=none;elbow=vertical;startArrow=block;startFill=1;strokeColor=#545B64;rounded=0;',
  },
}

export function DefaultLeft111(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, DEFAULT_LEFT_111)} />
}
