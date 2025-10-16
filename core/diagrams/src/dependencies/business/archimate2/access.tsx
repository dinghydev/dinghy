import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACCESS = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;html=1;endArrow=open;elbow=vertical;endFill=1;dashed=1',
  },
}

export function Access(props: DiagramNodeProps) {
  return (
    <Dependency {...ACCESS} {...props} _style={extendStyle(ACCESS, props)} />
  )
}
