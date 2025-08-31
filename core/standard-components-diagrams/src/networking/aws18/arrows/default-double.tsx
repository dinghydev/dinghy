import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFAULT_DOUBLE = {
  _style: {
    dependency:
      'edgeStyle=orthogonalEdgeStyle;html=1;endArrow=block;elbow=vertical;startArrow=block;startFill=1;endFill=1;strokeColor=#545B64;rounded=0;',
  },
}

export function DefaultDouble(props: DiagramNodeProps) {
  return (
    <Dependency
      {...DEFAULT_DOUBLE}
      {...props}
      _style={extendStyle(DEFAULT_DOUBLE, props)}
    />
  )
}
