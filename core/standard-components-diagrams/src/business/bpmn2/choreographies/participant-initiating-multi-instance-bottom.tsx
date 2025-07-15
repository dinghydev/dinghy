import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARTICIPANT_INITIATING_MULTI_INSTANCE_BOTTOM = {
  _style:
    'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;verticalAlign=top;isLoopMultiParallel=1;topLeftStyle=square;topRightStyle=square;whiteSpace=wrap;html=1;',
  _width: 120,
  _height: 40,
}

export function ParticipantInitiatingMultiInstanceBottom(
  props: DiagramNodeProps,
) {
  return <Shape {...PARTICIPANT_INITIATING_MULTI_INSTANCE_BOTTOM} {...props} />
}
