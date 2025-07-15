import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARTICIPANT_PROPERTY_4 = {
  _style: 'shape=rect;html=1;whiteSpace=wrap;',
  _width: 2,
  _height: 80,
}

export function ParticipantProperty4(props: DiagramNodeProps) {
  return <Shape {...PARTICIPANT_PROPERTY_4} {...props} />
}
