import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICE_BUS_RELAY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.service_bus_relay;pointerEvents=1;',
  },
  _original_width: 40,
  _original_height: 50,
}

export function ServiceBusRelay(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVICE_BUS_RELAY}
      {...props}
      _style={extendStyle(SERVICE_BUS_RELAY, props)}
    />
  )
}
