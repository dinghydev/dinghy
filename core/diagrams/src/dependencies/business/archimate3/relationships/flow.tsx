import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLOW = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;html=1;endArrow=block;dashed=1;elbow=vertical;endFill=1;dashPattern=6 4;',
  },
}

export function Flow(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, FLOW)} />
}
