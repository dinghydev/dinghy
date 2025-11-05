import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPECIALIZATION = {
  _style: {
    dependency:
      'endArrow=block;html=1;endFill=0;edgeStyle=elbowEdgeStyle;elbow=vertical',
  },
}

export function Specialization(props: NodeProps) {
  return (
    <Dependency
      {...SPECIALIZATION}
      {...props}
      _style={extendStyle(SPECIALIZATION, props)}
    />
  )
}
