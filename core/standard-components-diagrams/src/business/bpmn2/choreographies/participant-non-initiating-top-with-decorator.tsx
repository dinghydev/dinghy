import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARTICIPANT_NON_INITIATING_TOP_WITH_DECORATOR = {
  _style: 'shape=message;fillColor=#C0C0C0;html=1;',
  _width: 1,
  _height: 80,
}

export function ParticipantNonInitiatingTopWithDecorator(
  props: DiagramNodeProps,
) {
  return <Shape {...PARTICIPANT_NON_INITIATING_TOP_WITH_DECORATOR} {...props} />
}
