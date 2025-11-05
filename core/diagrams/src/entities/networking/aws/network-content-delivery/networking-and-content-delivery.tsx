import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETWORKING_AND_CONTENT_DELIVERY = {
  _style: {
    entity:
      'sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.networking_and_content_delivery;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function NetworkingAndContentDelivery(props: NodeProps) {
  return (
    <Shape
      {...NETWORKING_AND_CONTENT_DELIVERY}
      {...props}
      _style={extendStyle(NETWORKING_AND_CONTENT_DELIVERY, props)}
    />
  )
}
