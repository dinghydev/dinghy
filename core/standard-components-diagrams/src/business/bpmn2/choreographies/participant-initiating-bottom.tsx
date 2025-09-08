import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PARTICIPANT_INITIATING_BOTTOM = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;isLoopSub=0;topLeftStyle=square;topRightStyle=square;whiteSpace=wrap;html=1;',
  },
  _original_width: 120,
  _original_height: 20,
}

export function ParticipantInitiatingBottom(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTICIPANT_INITIATING_BOTTOM}
      {...props}
      _style={extendStyle(PARTICIPANT_INITIATING_BOTTOM, props)}
    />
  )
}
