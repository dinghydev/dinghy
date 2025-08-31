import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADDITIONAL_PARTICIPANT_INITIATING = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=square;whiteSpace=wrap;html=1;',
  },
  _width: 120,
  _height: 20,
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
