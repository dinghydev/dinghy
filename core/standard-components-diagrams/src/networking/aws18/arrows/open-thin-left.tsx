import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OPEN_THIN_LEFT = {
  _style:
    'edgeStyle=orthogonalEdgeStyle;html=1;endArrow=none;elbow=vertical;startArrow=openThin;startFill=0;strokeColor=#545B64;rounded=0;',
  _width: 100,
  _height: 0,
}

export function OpenThinLeft(props: DiagramNodeProps) {
  return <Dependency {...OPEN_THIN_LEFT} {...props} />
}
