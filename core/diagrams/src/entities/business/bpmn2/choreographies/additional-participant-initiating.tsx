import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ADDITIONAL_PARTICIPANT_INITIATING = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=square;whiteSpace=wrap;html=1;',
  },
  _width: 120,
  _height: 20,
}

export function AdditionalParticipantInitiating(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ADDITIONAL_PARTICIPANT_INITIATING)}
    />
  )
}
