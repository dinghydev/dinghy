import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADDITIONAL_PARTICIPANT_INITIATING_MULTI_INSTANCE_BOTTOM = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=square;verticalAlign=top;isLoopMultiParallel=1;whiteSpace=wrap;html=1;',
  },
  _original_width: 120,
  _original_height: 40,
}

export function AdditionalParticipantInitiatingMultiInstanceBottom(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...ADDITIONAL_PARTICIPANT_INITIATING_MULTI_INSTANCE_BOTTOM}
      {...props}
      _style={extendStyle(
        ADDITIONAL_PARTICIPANT_INITIATING_MULTI_INSTANCE_BOTTOM,
        props,
      )}
    />
  )
}
