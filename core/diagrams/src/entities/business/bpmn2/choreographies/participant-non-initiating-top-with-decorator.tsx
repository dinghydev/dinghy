import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTICIPANT_NON_INITIATING_TOP_WITH_DECORATOR = {
  _style: {
    entity: 'shape=message;fillColor=#C0C0C0;html=1;',
  },
  _width: 1,
  _height: 80,
}

export function ParticipantNonInitiatingTopWithDecorator(props: NodeProps) {
  return (
    <Shape
      {...PARTICIPANT_NON_INITIATING_TOP_WITH_DECORATOR}
      {...props}
      _style={extendStyle(PARTICIPANT_NON_INITIATING_TOP_WITH_DECORATOR, props)}
    />
  )
}
