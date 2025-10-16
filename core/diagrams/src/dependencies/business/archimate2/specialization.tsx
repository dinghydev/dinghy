import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPECIALIZATION = {
  _style: {
    dependency:
      'endArrow=block;html=1;endFill=0;edgeStyle=elbowEdgeStyle;elbow=vertical',
  },
}

export function Specialization(props: DiagramNodeProps) {
  return (
    <Dependency
      {...SPECIALIZATION}
      {...props}
      _style={extendStyle(SPECIALIZATION, props)}
    />
  )
}
