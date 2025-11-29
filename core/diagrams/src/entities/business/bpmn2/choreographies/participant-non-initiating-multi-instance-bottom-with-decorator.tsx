import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTICIPANT_NON_INITIATING_MULTI_INSTANCE_BOTTOM_WITH_DECORATOR = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;topLeftStyle=square;topRightStyle=square;verticalAlign=top;isLoopMultiParallel=1;fillColor=#C0C0C0;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 100,
}

export function ParticipantNonInitiatingMultiInstanceBottomWithDecorator(
  props: NodeProps,
) {
  return (
    <Shape
      {...props}
      _style={extendStyle(
        props,
        PARTICIPANT_NON_INITIATING_MULTI_INSTANCE_BOTTOM_WITH_DECORATOR,
      )}
    />
  )
}
