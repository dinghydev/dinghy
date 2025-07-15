import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TIME_EVENT_TRIGGER = {
  _style: 'shape=collate;html=1;',
  _width: 40,
  _height: 40,
}

export function TimeEventTrigger(props: DiagramNodeProps) {
  return <Shape {...TIME_EVENT_TRIGGER} {...props} />
}
