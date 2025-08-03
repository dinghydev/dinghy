import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRIGGERING = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;html=1;endArrow=block;dashed=0;elbow=vertical;endFill=1;',
  },
}

export function Triggering(props: DiagramNodeProps) {
  return <Dependency {...TRIGGERING} {...props} />
}
