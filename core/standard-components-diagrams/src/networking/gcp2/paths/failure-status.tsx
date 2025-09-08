import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FAILURE_STATUS = {
  _style: {
    dependency:
      'edgeStyle=orthogonalEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;rounded=0;strokeWidth=2;endSize=4;startSize=4;strokeColor=#EA4335;dashed=0;',
  },
}

export function FailureStatus(props: DiagramNodeProps) {
  return (
    <Dependency
      {...FAILURE_STATUS}
      {...props}
      _style={extendStyle(FAILURE_STATUS, props)}
    />
  )
}
