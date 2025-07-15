import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVICE_BUS_TOPICS_AND_SUBSCRIPTIONS = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.service_bus_topics_and_subscriptions;pointerEvents=1;',
  _width: 45,
  _height: 50,
}

export function ServiceBusTopicsAndSubscriptions(props: DiagramNodeProps) {
  return <Shape {...SERVICE_BUS_TOPICS_AND_SUBSCRIPTIONS} {...props} />
}
