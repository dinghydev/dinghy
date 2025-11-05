import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TIME_EVENT_TRIGGER = {
  _style: {
    entity: 'shape=collate;html=1;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function TimeEventTrigger(props: NodeProps) {
  return (
    <Shape
      {...TIME_EVENT_TRIGGER}
      {...props}
      _style={extendStyle(TIME_EVENT_TRIGGER, props)}
    />
  )
}
