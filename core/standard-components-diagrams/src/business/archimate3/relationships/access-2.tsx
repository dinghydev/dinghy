import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACCESS_2 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;endArrow=open;elbow=vertical;endFill=0;dashed=1;startArrow=open;startFill=0;dashPattern=1 4;',
  _width: 160,
  _height: 0,
}

export function Access2(props: DiagramNodeProps) {
  return <Dependency {...ACCESS_2} {...props} />
}
