import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTICIPANT_NON_INITIATING_MULTI_INSTANCE_BOTTOM = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;verticalAlign=top;isLoopMultiParallel=1;topLeftStyle=square;topRightStyle=square;fillColor=#C0C0C0;whiteSpace=wrap;html=1;',
  },
  _width: 120,
  _height: 40,
}

export function ParticipantNonInitiatingMultiInstanceBottom(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(
        props,
        PARTICIPANT_NON_INITIATING_MULTI_INSTANCE_BOTTOM,
      )}
    />
  )
}
