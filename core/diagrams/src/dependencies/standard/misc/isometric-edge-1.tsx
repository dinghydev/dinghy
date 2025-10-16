import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ISOMETRIC_EDGE_1 = {
  _style: {
    dependency: 'edgeStyle=isometricEdgeStyle;endArrow=none;html=1;',
  },
}

export function IsometricEdge1(props: DiagramNodeProps) {
  return (
    <Dependency
      {...ISOMETRIC_EDGE_1}
      {...props}
      _style={extendStyle(ISOMETRIC_EDGE_1, props)}
    />
  )
}
