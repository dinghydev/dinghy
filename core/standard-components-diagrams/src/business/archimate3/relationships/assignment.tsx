import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ASSIGNMENT = {
  _style:
    'endArrow=block;html=1;endFill=1;startArrow=oval;startFill=1;edgeStyle=elbowEdgeStyle;elbow=vertical;',
  _width: 160,
  _height: 0,
}

export function Assignment(props: DiagramNodeProps) {
  return <Dependency {...ASSIGNMENT} {...props} />
}
