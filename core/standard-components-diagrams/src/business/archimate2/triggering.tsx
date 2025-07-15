import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRIGGERING = {
  _style:
    'endArrow=block;html=1;endFill=1;startArrow=none;startFill=0;edgeStyle=elbowEdgeStyle;elbow=vertical;dashed=0',
  _width: 100,
  _height: 75,
}

export function Triggering(props: DiagramNodeProps) {
  return <Dependency {...TRIGGERING} {...props} />
}
