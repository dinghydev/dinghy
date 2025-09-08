import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const A_CONST = {
  _style: {
    dependency:
      'endArrow=block;html=1;endFill=1;startArrow=none;startFill=0;edgeStyle=elbowEdgeStyle;elbow=vertical;dashed=1',
  },
}

export function A(props: DiagramNodeProps) {
  return (
    <Dependency {...A_CONST} {...props} _style={extendStyle(A_CONST, props)} />
  )
}
