import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OPEN_LEFT = {
  _style: {
    dependency:
      'edgeStyle=orthogonalEdgeStyle;html=1;endArrow=none;elbow=vertical;startArrow=open;startFill=0;strokeColor=#545B64;rounded=0;',
  },
}

export function OpenLeft(props: DiagramNodeProps) {
  return (
    <Dependency
      {...OPEN_LEFT}
      {...props}
      _style={extendStyle(OPEN_LEFT, props)}
    />
  )
}
