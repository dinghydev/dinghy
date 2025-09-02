import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTICIPANT_PROPERTY_4 = {
  _style: {
    entity: 'shape=rect;html=1;whiteSpace=wrap;',
  },
  _original_width: 2,
  _original_height: 80,
}

export function ParticipantProperty4(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTICIPANT_PROPERTY_4}
      {...props}
      _style={extendStyle(PARTICIPANT_PROPERTY_4, props)}
    />
  )
}
