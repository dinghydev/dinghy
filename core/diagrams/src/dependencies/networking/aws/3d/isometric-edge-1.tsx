import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ISOMETRIC_EDGE_1 = {
  _style: {
    dependency: 'edgeStyle=isometricEdgeStyle;endArrow=none;html=1;',
  },
}

export function IsometricEdge1(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, ISOMETRIC_EDGE_1)} />
}
