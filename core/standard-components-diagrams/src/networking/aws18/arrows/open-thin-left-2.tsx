import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPEN_THIN_LEFT_2 = {
  _style: {
    dependency:
      'edgeStyle=orthogonalEdgeStyle;html=1;endArrow=openThin;elbow=vertical;startArrow=none;endFill=0;strokeColor=#545B64;rounded=0;',
  },
}

export function OpenThinLeft2(props: DiagramNodeProps) {
  return (
    <Dependency
      {...OPEN_THIN_LEFT_2}
      {...props}
      _style={extendStyle(OPEN_THIN_LEFT_2, props)}
    />
  )
}
