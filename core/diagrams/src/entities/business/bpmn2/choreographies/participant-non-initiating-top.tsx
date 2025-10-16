import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PARTICIPANT_NON_INITIATING_TOP = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;fillColor=#C0C0C0;whiteSpace=wrap;html=1;',
  },
  _width: 120,
  _height: 20,
}

export function ParticipantNonInitiatingTop(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTICIPANT_NON_INITIATING_TOP}
      {...props}
      _style={extendStyle(PARTICIPANT_NON_INITIATING_TOP, props)}
    />
  )
}
