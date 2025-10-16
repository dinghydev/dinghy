import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACCESS = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;html=1;endArrow=none;elbow=vertical;dashed=1;startFill=0;dashPattern=1 4;',
  },
}

export function Access(props: DiagramNodeProps) {
  return (
    <Dependency {...ACCESS} {...props} _style={extendStyle(ACCESS, props)} />
  )
}
