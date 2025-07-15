import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CUSTOM_EVENT_BUS = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#E7157B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.eventbridge_custom_event_bus_resource;',
  _width: 78,
  _height: 69,
}

export function CustomEventBus(props: DiagramNodeProps) {
  return <Shape {...CUSTOM_EVENT_BUS} {...props} />
}
