import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTENT_DELIVERY_NETWORK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.content_delivery_network;',
  },
  _width: 50,
  _height: 32.5,
}

export function ContentDeliveryNetwork(props: NodeProps) {
  return (
    <Shape
      {...CONTENT_DELIVERY_NETWORK}
      {...props}
      _style={extendStyle(CONTENT_DELIVERY_NETWORK, props)}
    />
  )
}
