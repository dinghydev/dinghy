import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACCESS = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;endArrow=open;elbow=vertical;endFill=1;dashed=1',
  _width: 100,
  _height: 75,
}

export function Access(props: DiagramNodeProps) {
  return <Dependency {...ACCESS} {...props} />
}
