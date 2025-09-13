import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PARTICIPANT_PROPERTY = {
  _style: {
    entity: 'shape=rect;html=1;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _width: 400,
  _height: 140,
}

export function ParticipantProperty(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTICIPANT_PROPERTY}
      {...props}
      _style={extendStyle(PARTICIPANT_PROPERTY, props)}
    />
  )
}
