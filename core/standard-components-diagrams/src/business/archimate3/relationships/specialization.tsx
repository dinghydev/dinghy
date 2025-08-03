import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPECIALIZATION = {
  _style: {
    dependency:
      'endArrow=block;html=1;endFill=0;edgeStyle=elbowEdgeStyle;elbow=vertical;',
  },
}

export function Specialization(props: DiagramNodeProps) {
  return <Dependency {...SPECIALIZATION} {...props} />
}
