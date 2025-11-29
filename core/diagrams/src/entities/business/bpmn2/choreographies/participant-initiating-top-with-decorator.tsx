import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTICIPANT_INITIATING_TOP_WITH_DECORATOR = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 80,
}

export function ParticipantInitiatingTopWithDecorator(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, PARTICIPANT_INITIATING_TOP_WITH_DECORATOR)}
    />
  )
}
