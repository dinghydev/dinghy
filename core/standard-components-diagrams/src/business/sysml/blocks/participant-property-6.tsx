import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARTICIPANT_PROPERTY_6 = {
  _style: 'edgeStyle=none;html=1;endArrow=none;dashed=1;rounded=0;',
  _width: 4,
  _height: 80,
}

export function ParticipantProperty6(props: DiagramNodeProps) {
  return <Shape {...PARTICIPANT_PROPERTY_6} {...props} />
}
