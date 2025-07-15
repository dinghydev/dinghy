import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONDITIONAL_SEQUENCE_FLOW = {
  _style:
    'edgeStyle=elbowEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;startArrow=diamondThin;startFill=0;endSize=6;startSize=10;',
  _width: 160,
  _height: 0,
}

export function ConditionalSequenceFlow(props: DiagramNodeProps) {
  return <Dependency {...CONDITIONAL_SEQUENCE_FLOW} {...props} />
}
