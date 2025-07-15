import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ASSOCIATION = {
  _style: 'edgeStyle=elbowEdgeStyle;html=1;endArrow=none;elbow=vertical;',
  _width: 160,
  _height: 0,
}

export function Association(props: DiagramNodeProps) {
  return <Dependency {...ASSOCIATION} {...props} />
}
