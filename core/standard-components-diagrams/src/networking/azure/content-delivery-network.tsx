import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTENT_DELIVERY_NETWORK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.content_delivery_network;',
  },
  _original_width: 50,
  _original_height: 32.5,
}

export function ContentDeliveryNetwork(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTENT_DELIVERY_NETWORK}
      {...props}
      _style={extendStyle(CONTENT_DELIVERY_NETWORK, props)}
    />
  )
}
