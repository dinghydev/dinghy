import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONDITIONAL_SEQUENCE_FLOW = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;startArrow=diamondThin;startFill=0;endSize=6;startSize=10;',
  },
}

export function ConditionalSequenceFlow(props: NodeProps) {
  return (
    <Dependency
      {...props}
      _style={extendStyle(props, CONDITIONAL_SEQUENCE_FLOW)}
    />
  )
}
