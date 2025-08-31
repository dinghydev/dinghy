import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTICIPANT_PROPERTY_3 = {
  _style: 'edgeStyle=none;html=1;endArrow=none;dashed=1;',
  _width: 4,
  _height: 140,
}

export function ParticipantProperty3(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTICIPANT_PROPERTY_3}
      {...props}
      _style={extendStyle(PARTICIPANT_PROPERTY_3, props)}
    />
  )
}
