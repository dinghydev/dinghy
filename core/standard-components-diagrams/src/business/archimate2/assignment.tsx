import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ASSIGNMENT = {
  _style:
    'endArrow=oval;html=1;endFill=1;startArrow=oval;startFill=1;edgeStyle=elbowEdgeStyle;elbow=vertical',
  _width: 100,
  _height: 75,
}

export function Assignment(props: DiagramNodeProps) {
  return <Dependency {...ASSIGNMENT} {...props} />
}
