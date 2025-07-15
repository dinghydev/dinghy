import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRIGGERING = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;endArrow=block;dashed=0;elbow=vertical;endFill=1;',
  _width: 160,
  _height: 0,
}

export function Triggering(props: DiagramNodeProps) {
  return <Dependency {...TRIGGERING} {...props} />
}
