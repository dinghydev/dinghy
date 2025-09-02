import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTICIPANT_PROPERTY_6 = {
  _style: {
    entity: 'edgeStyle=none;html=1;endArrow=none;dashed=1;rounded=0;',
  },
  _original_width: 4,
  _original_height: 80,
}

export function ParticipantProperty6(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTICIPANT_PROPERTY_6}
      {...props}
      _style={extendStyle(PARTICIPANT_PROPERTY_6, props)}
    />
  )
}
