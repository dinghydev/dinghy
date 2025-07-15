import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REALIZATION = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;endArrow=block;elbow=vertical;endFill=0;dashed=1;',
  _width: 160,
  _height: 0,
}

export function Realization(props: DiagramNodeProps) {
  return <Dependency {...REALIZATION} {...props} />
}
