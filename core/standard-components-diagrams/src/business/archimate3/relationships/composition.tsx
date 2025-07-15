import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPOSITION = {
  _style:
    'html=1;startArrow=diamondThin;startFill=1;edgeStyle=elbowEdgeStyle;elbow=vertical;startSize=10;endArrow=none;endFill=0;',
  _width: 160,
  _height: 0,
}

export function Composition(props: DiagramNodeProps) {
  return <Dependency {...COMPOSITION} {...props} />
}
