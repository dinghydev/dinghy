import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ADDITIONAL_PARTICIPANT_NON_INITIATING = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=square;fillColor=#C0C0C0;whiteSpace=wrap;html=1;',
  },
  _width: 120,
  _height: 20,
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
