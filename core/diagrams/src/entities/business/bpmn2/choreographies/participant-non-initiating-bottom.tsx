import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTICIPANT_NON_INITIATING_BOTTOM = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.task2;part=1;taskMarker=abstract;rectStyle=rounded;isLoopSub=0;topLeftStyle=square;topRightStyle=square;fillColor=#C0C0C0;whiteSpace=wrap;html=1;',
  },
  _width: 120,
  _height: 20,
}

export function ParticipantNonInitiatingBottom(props: NodeProps) {
  return (
    <Shape
      {...PARTICIPANT_NON_INITIATING_BOTTOM}
      {...props}
      _style={extendStyle(PARTICIPANT_NON_INITIATING_BOTTOM, props)}
    />
  )
}
