import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ASSIGNMENT = {
  _style: {
    dependency:
      'endArrow=oval;html=1;endFill=1;startArrow=oval;startFill=1;edgeStyle=elbowEdgeStyle;elbow=vertical',
  },
}

export function Assignment(props: DiagramNodeProps) {
  return (
    <Dependency
      {...ASSIGNMENT}
      {...props}
      _style={extendStyle(ASSIGNMENT, props)}
    />
  )
}
