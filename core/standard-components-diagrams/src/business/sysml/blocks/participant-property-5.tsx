import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTICIPANT_PROPERTY_5 = {
  _style: {
    entity: 'edgeStyle=none;endArrow=none;html=1;rounded=0;',
  },
  _width: 3,
  _height: 80,
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
