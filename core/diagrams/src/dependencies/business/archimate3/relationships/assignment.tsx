import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ASSIGNMENT = {
  _style: {
    dependency:
      'endArrow=block;html=1;endFill=1;startArrow=oval;startFill=1;edgeStyle=elbowEdgeStyle;elbow=vertical;',
  },
}

export function Assignment(props: NodeProps) {
  return (
    <Dependency
      {...ASSIGNMENT}
      {...props}
      _style={extendStyle(ASSIGNMENT, props)}
    />
  )
}
