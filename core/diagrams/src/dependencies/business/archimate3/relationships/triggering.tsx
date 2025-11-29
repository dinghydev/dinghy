import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRIGGERING = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;html=1;endArrow=block;dashed=0;elbow=vertical;endFill=1;',
  },
}

export function Triggering(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, TRIGGERING)} />
}
