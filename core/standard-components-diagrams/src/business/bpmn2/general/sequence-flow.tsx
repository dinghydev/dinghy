import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEQUENCE_FLOW = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;',
  },
}

export function SequenceFlow(props: DiagramNodeProps) {
  return (
    <Dependency
      {...SEQUENCE_FLOW}
      {...props}
      _style={extendStyle(SEQUENCE_FLOW, props)}
    />
  )
}
