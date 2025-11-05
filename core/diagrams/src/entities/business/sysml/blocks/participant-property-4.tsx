import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTICIPANT_PROPERTY_4 = {
  _style: {
    entity: 'shape=rect;html=1;whiteSpace=wrap;',
  },
  _width: 2,
  _height: 80,
}

export function ParticipantProperty4(props: NodeProps) {
  return (
    <Shape
      {...PARTICIPANT_PROPERTY_4}
      {...props}
      _style={extendStyle(PARTICIPANT_PROPERTY_4, props)}
    />
  )
}
