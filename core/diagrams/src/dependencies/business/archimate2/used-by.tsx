import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USED_BY = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;html=1;endArrow=open;elbow=vertical;endFill=1',
  },
}

export function UsedBy(props: NodeProps) {
  return (
    <Dependency {...USED_BY} {...props} _style={extendStyle(USED_BY, props)} />
  )
}
