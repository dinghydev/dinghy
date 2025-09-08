import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ADDITIONAL_PARTICIPANT_INITIATING = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=square;whiteSpace=wrap;html=1;',
  },
  _original_width: 120,
  _original_height: 20,
}

export function AdditionalParticipantInitiating(props: DiagramNodeProps) {
  return (
    <Shape
      {...ADDITIONAL_PARTICIPANT_INITIATING}
      {...props}
      _style={extendStyle(ADDITIONAL_PARTICIPANT_INITIATING, props)}
    />
  )
}
