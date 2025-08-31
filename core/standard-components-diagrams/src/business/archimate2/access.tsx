import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

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
