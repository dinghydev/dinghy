import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPOSITION = {
  _style:
    'endArrow=none;html=1;endFill=0;startArrow=diamondThin;startFill=1;edgeStyle=elbowEdgeStyle;elbow=vertical',
  _width: 100,
  _height: 75,
}

export function Composition(props: DiagramNodeProps) {
  return <Dependency {...COMPOSITION} {...props} />
}
