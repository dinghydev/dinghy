import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTICIPANT_INITIATING_TOP_WITH_DECORATOR_2 = {
  _style: {
    entity: 'shape=message;html=1;',
  },
  _width: 1,
  _height: 80,
}

export function ParticipantInitiatingTopWithDecorator2(props: NodeProps) {
  return (
    <Shape
      {...PARTICIPANT_INITIATING_TOP_WITH_DECORATOR_2}
      {...props}
      _style={extendStyle(PARTICIPANT_INITIATING_TOP_WITH_DECORATOR_2, props)}
    />
  )
}
