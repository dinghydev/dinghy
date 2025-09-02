import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTICIPANT_PROPERTY_2 = {
  _style: {
    entity: 'edgeStyle=none;html=1;endArrow=none;verticalAlign=bottom;',
  },
  _original_width: 3,
  _original_height: 140,
}

export function ParticipantProperty2(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTICIPANT_PROPERTY_2}
      {...props}
      _style={extendStyle(PARTICIPANT_PROPERTY_2, props)}
    />
  )
}
