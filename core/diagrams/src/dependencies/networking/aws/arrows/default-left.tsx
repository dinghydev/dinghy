import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEFAULT_LEFT = {
  _style: {
    dependency:
      'edgeStyle=orthogonalEdgeStyle;html=1;endArrow=block;elbow=vertical;startArrow=none;endFill=1;strokeColor=#545B64;rounded=0;',
  },
}

export function DefaultLeft(props: NodeProps) {
  return (
    <Dependency
      {...DEFAULT_LEFT}
      {...props}
      _style={extendStyle(DEFAULT_LEFT, props)}
    />
  )
}
