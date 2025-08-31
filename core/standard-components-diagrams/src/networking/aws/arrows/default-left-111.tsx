import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFAULT_LEFT_111 = {
  _style: {
    dependency:
      'edgeStyle=orthogonalEdgeStyle;html=1;endArrow=none;elbow=vertical;startArrow=block;startFill=1;strokeColor=#545B64;rounded=0;',
  },
}

export function DefaultLeft111(props: DiagramNodeProps) {
  return (
    <Dependency
      {...DEFAULT_LEFT_111}
      {...props}
      _style={extendStyle(DEFAULT_LEFT_111, props)}
    />
  )
}
