import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EVENT_EVENT_BASED = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.event_event_based;fillColor=#759C3E;gradientColor=none;',
  _width: 60,
  _height: 82.5,
}

export function EventEventBased(props: DiagramNodeProps) {
  return <Shape {...EVENT_EVENT_BASED} {...props} />
}
