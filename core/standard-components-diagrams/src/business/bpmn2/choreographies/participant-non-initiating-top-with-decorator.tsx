import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PARTICIPANT_NON_INITIATING_TOP_WITH_DECORATOR = {
  _style: {
    entity: 'shape=message;fillColor=#C0C0C0;html=1;',
  },
  _original_width: 1,
  _original_height: 80,
}

export function ParticipantNonInitiatingTopWithDecorator(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...PARTICIPANT_NON_INITIATING_TOP_WITH_DECORATOR}
      {...props}
      _style={extendStyle(PARTICIPANT_NON_INITIATING_TOP_WITH_DECORATOR, props)}
    />
  )
}
