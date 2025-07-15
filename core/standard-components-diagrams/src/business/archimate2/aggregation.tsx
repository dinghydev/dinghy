import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AGGREGATION = {
  _style:
    'endArrow=none;html=1;endFill=0;startArrow=diamondThin;startFill=0;edgeStyle=elbowEdgeStyle;elbow=vertical',
  _width: 100,
  _height: 75,
}

export function Aggregation(props: DiagramNodeProps) {
  return <Dependency {...AGGREGATION} {...props} />
}
