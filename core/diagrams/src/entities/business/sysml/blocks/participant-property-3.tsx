import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTICIPANT_PROPERTY_3 = {
  _style: {
    entity: 'edgeStyle=none;html=1;endArrow=none;dashed=1;',
  },
  _width: 4,
  _height: 140,
}

export function ParticipantProperty3(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, PARTICIPANT_PROPERTY_3)} />
  )
}
