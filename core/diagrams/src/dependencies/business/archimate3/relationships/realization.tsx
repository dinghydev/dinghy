import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REALIZATION = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;html=1;endArrow=block;elbow=vertical;endFill=0;dashed=1;',
  },
}

export function Realization(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, REALIZATION)} />
}
