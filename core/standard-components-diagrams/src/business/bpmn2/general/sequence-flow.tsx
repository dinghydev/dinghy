import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SEQUENCE_FLOW = {
  _style:
    'edgeStyle=elbowEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;',
  _width: 160,
  _height: 0,
}

export function SequenceFlow(props: DiagramNodeProps) {
  return <Dependency {...SEQUENCE_FLOW} {...props} />
}
