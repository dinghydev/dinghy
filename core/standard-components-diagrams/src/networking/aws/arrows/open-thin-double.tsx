import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPEN_THIN_DOUBLE = {
  _style: {
    dependency:
      'edgeStyle=orthogonalEdgeStyle;html=1;endArrow=openThin;elbow=vertical;startArrow=openThin;startFill=0;endFill=0;strokeColor=#545B64;rounded=0;',
  },
}

export function OpenThinDouble(props: DiagramNodeProps) {
  return (
    <Dependency
      {...OPEN_THIN_DOUBLE}
      {...props}
      _style={extendStyle(OPEN_THIN_DOUBLE, props)}
    />
  )
}
