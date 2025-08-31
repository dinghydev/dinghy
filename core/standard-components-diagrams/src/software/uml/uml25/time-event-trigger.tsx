import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TIME_EVENT_TRIGGER = {
  _style: {
    entity: 'shape=collate;html=1;',
  },
  _width: 40,
  _height: 40,
}

export function TimeEventTrigger(props: DiagramNodeProps) {
  return (
    <Shape
      {...TIME_EVENT_TRIGGER}
      {...props}
      _style={extendStyle(TIME_EVENT_TRIGGER, props)}
    />
  )
}
