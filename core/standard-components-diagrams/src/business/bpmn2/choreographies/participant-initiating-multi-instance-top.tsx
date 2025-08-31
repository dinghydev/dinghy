import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTICIPANT_INITIATING_MULTI_INSTANCE_TOP = {
  _style:
    'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;bottomRightStyle=square;bottomLeftStyle=square;verticalAlign=top;isLoopMultiParallel=1;whiteSpace=wrap;html=1;',
  _width: 120,
  _height: 40,
}

export function ParticipantInitiatingMultiInstanceTop(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTICIPANT_INITIATING_MULTI_INSTANCE_TOP}
      {...props}
      _style={extendStyle(PARTICIPANT_INITIATING_MULTI_INSTANCE_TOP, props)}
    />
  )
}
