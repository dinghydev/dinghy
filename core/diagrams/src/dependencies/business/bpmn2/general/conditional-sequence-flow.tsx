import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONDITIONAL_SEQUENCE_FLOW = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;startArrow=diamondThin;startFill=0;endSize=6;startSize=10;',
  },
}

export function ConditionalSequenceFlow(props: DiagramNodeProps) {
  return (
    <Dependency
      {...CONDITIONAL_SEQUENCE_FLOW}
      {...props}
      _style={extendStyle(CONDITIONAL_SEQUENCE_FLOW, props)}
    />
  )
}
