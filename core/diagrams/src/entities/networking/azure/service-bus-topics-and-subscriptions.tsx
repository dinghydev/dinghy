import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVICE_BUS_TOPICS_AND_SUBSCRIPTIONS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.service_bus_topics_and_subscriptions;pointerEvents=1;',
  },
  _original_width: 45,
  _original_height: 50,
}

export function ServiceBusTopicsAndSubscriptions(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, SERVICE_BUS_TOPICS_AND_SUBSCRIPTIONS)}
    />
  )
}
