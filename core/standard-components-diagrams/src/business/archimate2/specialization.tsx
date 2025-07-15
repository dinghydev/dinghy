import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPECIALIZATION = {
  _style:
    'endArrow=block;html=1;endFill=0;edgeStyle=elbowEdgeStyle;elbow=vertical',
  _width: 100,
  _height: 75,
}

export function Specialization(props: DiagramNodeProps) {
  return <Dependency {...SPECIALIZATION} {...props} />
}
