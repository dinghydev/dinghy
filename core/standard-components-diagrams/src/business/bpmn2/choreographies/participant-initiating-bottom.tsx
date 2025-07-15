import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARTICIPANT_INITIATING_BOTTOM = {
  _style:
    'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;isLoopSub=0;topLeftStyle=square;topRightStyle=square;whiteSpace=wrap;html=1;',
  _width: 120,
  _height: 20,
}

export function ParticipantInitiatingBottom(props: DiagramNodeProps) {
  return <Shape {...PARTICIPANT_INITIATING_BOTTOM} {...props} />
}
