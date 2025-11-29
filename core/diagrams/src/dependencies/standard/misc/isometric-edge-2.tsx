import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ISOMETRIC_EDGE_2 = {
  _style: {
    dependency:
      'edgeStyle=isometricEdgeStyle;endArrow=none;html=1;elbow=vertical;',
  },
}

export function IsometricEdge2(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, ISOMETRIC_EDGE_2)} />
}
