import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPECIALIZATION = {
  _style:
    'endArrow=block;html=1;endFill=0;edgeStyle=elbowEdgeStyle;elbow=vertical;',
  _width: 160,
  _height: 0,
}

export function Specialization(props: DiagramNodeProps) {
  return <Dependency {...SPECIALIZATION} {...props} />
}
