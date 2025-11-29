import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEFAULT_EVENT_BUS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#E7157B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.eventbridge_default_event_bus_resource;',
  },
  _width: 78,
  _height: 53,
}

export function DefaultEventBus(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEFAULT_EVENT_BUS)} />
}
