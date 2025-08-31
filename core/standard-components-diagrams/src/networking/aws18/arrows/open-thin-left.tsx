import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPEN_THIN_LEFT = {
  _style: {
    dependency:
      'edgeStyle=orthogonalEdgeStyle;html=1;endArrow=none;elbow=vertical;startArrow=openThin;startFill=0;strokeColor=#545B64;rounded=0;',
  },
}

export function OpenThinLeft(props: DiagramNodeProps) {
  return (
    <Dependency
      {...OPEN_THIN_LEFT}
      {...props}
      _style={extendStyle(OPEN_THIN_LEFT, props)}
    />
  )
}
