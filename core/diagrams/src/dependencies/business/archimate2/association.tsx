import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ASSOCIATION = {
  _style: {
    dependency: 'edgeStyle=elbowEdgeStyle;html=1;endArrow=none;elbow=vertical',
  },
}

export function Association(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, ASSOCIATION)} />
}
