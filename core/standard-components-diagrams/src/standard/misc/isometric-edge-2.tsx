import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ISOMETRIC_EDGE_2 = {
  _style: 'edgeStyle=isometricEdgeStyle;endArrow=none;html=1;elbow=vertical;',
  _width: 50,
  _height: 100,
}

export function IsometricEdge2(props: DiagramNodeProps) {
  return <Dependency {...ISOMETRIC_EDGE_2} {...props} />
}
