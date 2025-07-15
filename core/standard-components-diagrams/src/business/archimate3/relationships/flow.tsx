import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FLOW = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;endArrow=block;dashed=1;elbow=vertical;endFill=1;dashPattern=6 4;',
  _width: 160,
  _height: 0,
}

export function Flow(props: DiagramNodeProps) {
  return <Dependency {...FLOW} {...props} />
}
