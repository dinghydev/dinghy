import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EVENT_EVENT_BASED = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.event_event_based;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 82.5,
}

export function EventEventBased(props: DiagramNodeProps) {
  return (
    <Shape
      {...EVENT_EVENT_BASED}
      {...props}
      _style={extendStyle(EVENT_EVENT_BASED, props)}
    />
  )
}
