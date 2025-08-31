import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFAULT_LEFT_2 = {
  _style: {
    dependency:
      'edgeStyle=orthogonalEdgeStyle;html=1;endArrow=block;elbow=vertical;startArrow=none;endFill=1;strokeColor=#545B64;rounded=0;',
  },
}

export function DefaultLeft2(props: DiagramNodeProps) {
  return (
    <Dependency
      {...DEFAULT_LEFT_2}
      {...props}
      _style={extendStyle(DEFAULT_LEFT_2, props)}
    />
  )
}
