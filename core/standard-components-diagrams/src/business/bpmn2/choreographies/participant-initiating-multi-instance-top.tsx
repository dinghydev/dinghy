import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PARTICIPANT_INITIATING_MULTI_INSTANCE_TOP = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;verticalAlign=top;isLoopMultiParallel=1;whiteSpace=wrap;html=1;',
  },
  _original_width: 120,
  _original_height: 40,
}

export function ParticipantInitiatingMultiInstanceTop(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTICIPANT_INITIATING_MULTI_INSTANCE_TOP}
      {...props}
      _style={extendStyle(PARTICIPANT_INITIATING_MULTI_INSTANCE_TOP, props)}
    />
  )
}
