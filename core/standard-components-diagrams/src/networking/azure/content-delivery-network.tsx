import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTENT_DELIVERY_NETWORK = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.content_delivery_network;',
  _width: 50,
  _height: 32.5,
}

export function ContentDeliveryNetwork(props: DiagramNodeProps) {
  return <Shape {...CONTENT_DELIVERY_NETWORK} {...props} />
}
