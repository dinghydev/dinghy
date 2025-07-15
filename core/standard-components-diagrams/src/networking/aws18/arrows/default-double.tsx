import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEFAULT_DOUBLE = {
  _style:
    'edgeStyle=orthogonalEdgeStyle;html=1;endArrow=block;elbow=vertical;startArrow=block;startFill=1;endFill=1;strokeColor=#545B64;rounded=0;',
  _width: 100,
  _height: 0,
}

export function DefaultDouble(props: DiagramNodeProps) {
  return <Dependency {...DEFAULT_DOUBLE} {...props} />
}
