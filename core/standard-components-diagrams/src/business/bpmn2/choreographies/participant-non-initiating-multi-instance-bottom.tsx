import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTICIPANT_NON_INITIATING_MULTI_INSTANCE_BOTTOM = {
  _style:
    'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;verticalAlign=top;isLoopMultiParallel=1;topLeftStyle=square;topRightStyle=square;fillColor=#C0C0C0;whiteSpace=wrap;html=1;',
  _width: 120,
  _height: 40,
}

export function ParticipantNonInitiatingMultiInstanceBottom(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...PARTICIPANT_NON_INITIATING_MULTI_INSTANCE_BOTTOM}
      {...props}
      _style={extendStyle(
        PARTICIPANT_NON_INITIATING_MULTI_INSTANCE_BOTTOM,
        props,
      )}
    />
  )
}
