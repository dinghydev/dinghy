import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARTICIPANT_INITIATING_TOP = {
  _style:
    'whiteSpace=wrap;shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;html=1;',
  _width: 120,
  _height: 20,
}

export function ParticipantInitiatingTop(props: DiagramNodeProps) {
  return <Shape {...PARTICIPANT_INITIATING_TOP} {...props} />
}
