import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FAILURE_STATUS = {
  _style:
    'edgeStyle=orthogonalEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;rounded=0;strokeWidth=2;endSize=4;startSize=4;strokeColor=#EA4335;dashed=0;',
  _width: 100,
  _height: 0,
}

export function FailureStatus(props: DiagramNodeProps) {
  return <Dependency {...FAILURE_STATUS} {...props} />
}
