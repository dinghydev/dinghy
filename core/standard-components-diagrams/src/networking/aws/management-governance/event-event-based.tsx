import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EVENT_EVENT_BASED = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#E7157B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.event_event_based;',
  _width: 78,
  _height: 78,
}

export function EventEventBased(props: DiagramNodeProps) {
  return <Shape {...EVENT_EVENT_BASED} {...props} />
}
