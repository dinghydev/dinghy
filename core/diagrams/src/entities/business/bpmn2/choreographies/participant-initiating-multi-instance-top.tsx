import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTICIPANT_INITIATING_MULTI_INSTANCE_TOP = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;verticalAlign=top;isLoopMultiParallel=1;whiteSpace=wrap;html=1;',
  },
  _width: 120,
  _height: 40,
}

export function ParticipantInitiatingMultiInstanceTop(props: NodeProps) {
  return (
    <Shape
      {...PARTICIPANT_INITIATING_MULTI_INSTANCE_TOP}
      {...props}
      _style={extendStyle(PARTICIPANT_INITIATING_MULTI_INSTANCE_TOP, props)}
    />
  )
}
