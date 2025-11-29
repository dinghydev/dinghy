import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_WAN_TRANSIT_GATEWAY_ROUTE_TABLE_ATTACHMENT = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.cloud_wan_transit_gateway_route_table_attachment;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function CloudWanTransitGatewayRouteTableAttachment(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(
        props,
        CLOUD_WAN_TRANSIT_GATEWAY_ROUTE_TABLE_ATTACHMENT,
      )}
    />
  )
}
