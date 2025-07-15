import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACCESS_2 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;endArrow=none;elbow=vertical;endFill=0;dashed=1',
  _width: 100,
  _height: 75,
}

export function Access2(props: DiagramNodeProps) {
  return <Dependency {...ACCESS_2} {...props} />
}
