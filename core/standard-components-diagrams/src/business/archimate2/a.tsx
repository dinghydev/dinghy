import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const A_CONST = {
  _style:
    'endArrow=block;html=1;endFill=1;startArrow=none;startFill=0;edgeStyle=elbowEdgeStyle;elbow=vertical;dashed=1',
  _width: 100,
  _height: 75,
}

export function A(props: DiagramNodeProps) {
  return <Dependency {...A_CONST} {...props} />
}
