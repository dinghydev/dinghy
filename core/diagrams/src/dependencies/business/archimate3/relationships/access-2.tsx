import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACCESS_2 = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;html=1;endArrow=open;elbow=vertical;endFill=0;dashed=1;startArrow=open;startFill=0;dashPattern=1 4;',
  },
}

export function Access2(props: NodeProps) {
  return (
    <Dependency
      {...ACCESS_2}
      {...props}
      _style={extendStyle(ACCESS_2, props)}
    />
  )
}
