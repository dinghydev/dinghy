import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEFAULT_SEQUENCE_FLOW = {
  _style:
    'edgeStyle=elbowEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;startArrow=dash;startFill=0;endSize=6;startSize=6;',
  _width: 160,
  _height: 0,
}

export function DefaultSequenceFlow(props: DiagramNodeProps) {
  return <Dependency {...DEFAULT_SEQUENCE_FLOW} {...props} />
}
