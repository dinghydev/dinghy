import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EVENT_TIME_BASED = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.event_time_based;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 63,
  _original_height: 82.5,
}

export function EventTimeBased(props: DiagramNodeProps) {
  return (
    <Shape
      {...EVENT_TIME_BASED}
      {...props}
      _style={extendStyle(EVENT_TIME_BASED, props)}
    />
  )
}
