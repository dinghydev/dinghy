import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTICIPANT_PROPERTY_2 = {
  _style: {
    entity: 'edgeStyle=none;html=1;endArrow=none;verticalAlign=bottom;',
  },
  _width: 3,
  _height: 140,
}

export function ParticipantProperty2(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, PARTICIPANT_PROPERTY_2)} />
  )
}
