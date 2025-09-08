import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PARTICIPANT_PROPERTY_5 = {
  _style: {
    entity: 'edgeStyle=none;endArrow=none;html=1;rounded=0;',
  },
  _original_width: 3,
  _original_height: 80,
}

export function ParticipantProperty5(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTICIPANT_PROPERTY_5}
      {...props}
      _style={extendStyle(PARTICIPANT_PROPERTY_5, props)}
    />
  )
}
