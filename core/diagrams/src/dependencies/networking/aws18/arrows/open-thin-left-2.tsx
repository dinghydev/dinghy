import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPEN_THIN_LEFT_2 = {
  _style: {
    dependency:
      'edgeStyle=orthogonalEdgeStyle;html=1;endArrow=openThin;elbow=vertical;startArrow=none;endFill=0;strokeColor=#545B64;rounded=0;',
  },
}

export function OpenThinLeft2(props: NodeProps) {
  return (
    <Dependency
      {...OPEN_THIN_LEFT_2}
      {...props}
      _style={extendStyle(OPEN_THIN_LEFT_2, props)}
    />
  )
}
