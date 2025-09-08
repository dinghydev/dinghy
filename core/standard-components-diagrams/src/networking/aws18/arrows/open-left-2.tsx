import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OPEN_LEFT_2 = {
  _style: {
    dependency:
      'edgeStyle=orthogonalEdgeStyle;html=1;endArrow=open;elbow=vertical;startArrow=none;endFill=0;strokeColor=#545B64;rounded=0;',
  },
}

export function OpenLeft2(props: DiagramNodeProps) {
  return (
    <Dependency
      {...OPEN_LEFT_2}
      {...props}
      _style={extendStyle(OPEN_LEFT_2, props)}
    />
  )
}
