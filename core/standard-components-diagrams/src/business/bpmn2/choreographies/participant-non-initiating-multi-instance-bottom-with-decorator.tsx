import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARTICIPANT_NON_INITIATING_MULTI_INSTANCE_BOTTOM_WITH_DECORATOR = {
  _style:
    'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;topLeftStyle=square;topRightStyle=square;verticalAlign=top;isLoopMultiParallel=1;fillColor=#C0C0C0;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 100,
}

export function ParticipantNonInitiatingMultiInstanceBottomWithDecorator(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...PARTICIPANT_NON_INITIATING_MULTI_INSTANCE_BOTTOM_WITH_DECORATOR}
      {...props}
    />
  )
}
