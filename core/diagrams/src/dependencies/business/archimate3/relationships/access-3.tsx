import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACCESS_3 = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;html=1;endArrow=open;elbow=vertical;endFill=0;dashed=1;dashPattern=1 4;',
  },
}

export function Access3(props: NodeProps) {
  return (
    <Dependency
      {...ACCESS_3}
      {...props}
      _style={extendStyle(ACCESS_3, props)}
    />
  )
}
