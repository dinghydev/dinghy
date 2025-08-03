import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ISOMETRIC_EDGE_2 = {
  _style: {
    dependency:
      'edgeStyle=isometricEdgeStyle;endArrow=none;html=1;elbow=vertical;',
  },
}

export function IsometricEdge2(props: DiagramNodeProps) {
  return <Dependency {...ISOMETRIC_EDGE_2} {...props} />
}
