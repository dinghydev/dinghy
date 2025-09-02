import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTICIPANT_NON_INITIATING_BOTTOM = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;isLoopSub=0;topLeftStyle=square;topRightStyle=square;fillColor=#C0C0C0;whiteSpace=wrap;html=1;',
  },
  _original_width: 120,
  _original_height: 20,
}

export function ParticipantNonInitiatingBottom(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTICIPANT_NON_INITIATING_BOTTOM}
      {...props}
      _style={extendStyle(PARTICIPANT_NON_INITIATING_BOTTOM, props)}
    />
  )
}
