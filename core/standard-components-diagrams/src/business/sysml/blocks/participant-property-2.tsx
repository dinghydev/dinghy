import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTICIPANT_PROPERTY_2 = {
  _style: 'edgeStyle=none;html=1;endArrow=none;verticalAlign=bottom;',
  _width: 3,
  _height: 140,
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
