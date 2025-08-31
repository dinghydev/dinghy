import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTICIPANT_NON_INITIATING_TOP_WITH_DECORATOR = {
  _style: {
    entity: 'shape=message;fillColor=#C0C0C0;html=1;',
  },
  _width: 1,
  _height: 80,
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
