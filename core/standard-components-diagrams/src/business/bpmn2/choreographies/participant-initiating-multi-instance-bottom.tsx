import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTICIPANT_INITIATING_MULTI_INSTANCE_BOTTOM = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;verticalAlign=top;isLoopMultiParallel=1;topLeftStyle=square;topRightStyle=square;whiteSpace=wrap;html=1;',
  },
  _original_width: 120,
  _original_height: 40,
}

export function ParticipantInitiatingMultiInstanceBottom(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...PARTICIPANT_INITIATING_MULTI_INSTANCE_BOTTOM}
      {...props}
      _style={extendStyle(PARTICIPANT_INITIATING_MULTI_INSTANCE_BOTTOM, props)}
    />
  )
}
