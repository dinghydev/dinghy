import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OPEN_THIN_LEFT_2 = {
  _style:
    'edgeStyle=orthogonalEdgeStyle;html=1;endArrow=openThin;elbow=vertical;startArrow=none;endFill=0;strokeColor=#545B64;rounded=0;',
  _width: 100,
  _height: 0,
}

export function OpenThinLeft2(props: DiagramNodeProps) {
  return <Dependency {...OPEN_THIN_LEFT_2} {...props} />
}
