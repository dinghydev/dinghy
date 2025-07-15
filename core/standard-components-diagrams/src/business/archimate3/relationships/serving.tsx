import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVING = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;endArrow=open;elbow=vertical;endFill=1;',
  _width: 160,
  _height: 0,
}

export function Serving(props: DiagramNodeProps) {
  return <Dependency {...SERVING} {...props} />
}
