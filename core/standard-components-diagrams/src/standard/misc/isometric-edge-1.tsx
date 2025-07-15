import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ISOMETRIC_EDGE_1 = {
  _style: 'edgeStyle=isometricEdgeStyle;endArrow=none;html=1;',
  _width: 50,
  _height: 100,
}

export function IsometricEdge1(props: DiagramNodeProps) {
  return <Dependency {...ISOMETRIC_EDGE_1} {...props} />
}
