import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACCESS_2 = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;html=1;endArrow=none;elbow=vertical;endFill=0;dashed=1',
  },
}

export function Access2(props: DiagramNodeProps) {
  return (
    <Dependency
      {...ACCESS_2}
      {...props}
      _style={extendStyle(ACCESS_2, props)}
    />
  )
}
