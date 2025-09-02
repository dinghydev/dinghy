import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTICIPANT_NON_INITIATING_MULTI_INSTANCE_TOP = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;verticalAlign=top;isLoopMultiParallel=1;fillColor=#C0C0C0;whiteSpace=wrap;html=1;',
  },
  _original_width: 120,
  _original_height: 40,
}

export function ParticipantNonInitiatingMultiInstanceTop(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...PARTICIPANT_NON_INITIATING_MULTI_INSTANCE_TOP}
      {...props}
      _style={extendStyle(PARTICIPANT_NON_INITIATING_MULTI_INSTANCE_TOP, props)}
    />
  )
}
