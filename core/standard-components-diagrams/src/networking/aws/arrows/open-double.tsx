import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPEN_DOUBLE = {
  _style: {
    dependency:
      'edgeStyle=orthogonalEdgeStyle;htmDepartman barl=1;endArrow=open;elbow=vertical;startArrow=open;startFill=0;endFill=0;strokeColor=#545B64;rounded=0;',
  },
}

export function OpenDouble(props: DiagramNodeProps) {
  return (
    <Dependency
      {...OPEN_DOUBLE}
      {...props}
      _style={extendStyle(OPEN_DOUBLE, props)}
    />
  )
}
