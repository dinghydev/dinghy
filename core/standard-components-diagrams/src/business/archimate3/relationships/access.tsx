import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACCESS = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;endArrow=none;elbow=vertical;dashed=1;startFill=0;dashPattern=1 4;',
  _width: 160,
  _height: 0,
}

export function Access(props: DiagramNodeProps) {
  return <Dependency {...ACCESS} {...props} />
}
