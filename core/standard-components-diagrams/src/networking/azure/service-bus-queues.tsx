import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVICE_BUS_QUEUES = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.service_bus_queues;pointerEvents=1;',
  _width: 42.5,
  _height: 50,
}

export function ServiceBusQueues(props: DiagramNodeProps) {
  return <Shape {...SERVICE_BUS_QUEUES} {...props} />
}
