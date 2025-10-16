import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PARTICIPANT_INITIATING_MULTI_INSTANCE_BOTTOM_WITH_DECORATOR = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;topLeftStyle=square;topRightStyle=square;verticalAlign=top;isLoopMultiParallel=1;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 100,
}

export function ParticipantInitiatingMultiInstanceBottomWithDecorator(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...PARTICIPANT_INITIATING_MULTI_INSTANCE_BOTTOM_WITH_DECORATOR}
      {...props}
      _style={extendStyle(
        PARTICIPANT_INITIATING_MULTI_INSTANCE_BOTTOM_WITH_DECORATOR,
        props,
      )}
    />
  )
}
