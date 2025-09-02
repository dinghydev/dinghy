import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADDITIONAL_PARTICIPANT_NON_INITIATING = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=square;fillColor=#C0C0C0;whiteSpace=wrap;html=1;',
  },
  _original_width: 120,
  _original_height: 20,
}

export function AdditionalParticipantNonInitiating(props: DiagramNodeProps) {
  return (
    <Shape
      {...ADDITIONAL_PARTICIPANT_NON_INITIATING}
      {...props}
      _style={extendStyle(ADDITIONAL_PARTICIPANT_NON_INITIATING, props)}
    />
  )
}
