import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const A_CONST = {
  _style: {
    dependency:
      'endArrow=block;html=1;endFill=1;startArrow=none;startFill=0;edgeStyle=elbowEdgeStyle;elbow=vertical;dashed=1',
  },
}

export function A(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, A_CONST)} />
}
