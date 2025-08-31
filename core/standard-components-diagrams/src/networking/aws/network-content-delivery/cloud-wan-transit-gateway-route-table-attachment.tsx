import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_WAN_TRANSIT_GATEWAY_ROUTE_TABLE_ATTACHMENT = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.cloud_wan_transit_gateway_route_table_attachment;',
  },
  _width: 60,
  _height: 60,
}

export function CloudWanTransitGatewayRouteTableAttachment(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...CLOUD_WAN_TRANSIT_GATEWAY_ROUTE_TABLE_ATTACHMENT}
      {...props}
      _style={extendStyle(
        CLOUD_WAN_TRANSIT_GATEWAY_ROUTE_TABLE_ATTACHMENT,
        props,
      )}
    />
  )
}
