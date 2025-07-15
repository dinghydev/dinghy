import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ADDITIONAL_PARTICIPANT_INITIATING_MULTI_INSTANCE_BOTTOM = {
  _style:
    'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=square;verticalAlign=top;isLoopMultiParallel=1;whiteSpace=wrap;html=1;',
  _width: 120,
  _height: 40,
}

export function AdditionalParticipantInitiatingMultiInstanceBottom(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...ADDITIONAL_PARTICIPANT_INITIATING_MULTI_INSTANCE_BOTTOM}
      {...props}
    />
  )
}
