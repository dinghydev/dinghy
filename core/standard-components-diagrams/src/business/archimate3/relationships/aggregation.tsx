import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AGGREGATION = {
  _style:
    'html=1;startArrow=diamondThin;startFill=0;edgeStyle=elbowEdgeStyle;elbow=vertical;startSize=10;endArrow=none;endFill=0;',
  _width: 160,
  _height: 0,
}

export function Aggregation(props: DiagramNodeProps) {
  return <Dependency {...AGGREGATION} {...props} />
}
