import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTICIPANT_INITIATING_TOP_WITH_DECORATOR = {
  _style:
    'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 80,
}

export function ParticipantInitiatingTopWithDecorator(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTICIPANT_INITIATING_TOP_WITH_DECORATOR}
      {...props}
      _style={extendStyle(PARTICIPANT_INITIATING_TOP_WITH_DECORATOR, props)}
    />
  )
}
