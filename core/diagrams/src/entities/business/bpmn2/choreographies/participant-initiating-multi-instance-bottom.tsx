import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTICIPANT_INITIATING_MULTI_INSTANCE_BOTTOM = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;verticalAlign=top;isLoopMultiParallel=1;topLeftStyle=square;topRightStyle=square;whiteSpace=wrap;html=1;',
  },
  _width: 120,
  _height: 40,
}

export function ParticipantInitiatingMultiInstanceBottom(props: NodeProps) {
  return (
    <Shape
      {...PARTICIPANT_INITIATING_MULTI_INSTANCE_BOTTOM}
      {...props}
      _style={extendStyle(PARTICIPANT_INITIATING_MULTI_INSTANCE_BOTTOM, props)}
    />
  )
}
