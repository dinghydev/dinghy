import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRANSIT_GATEWAY_ATTACHMENT = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.transit_gateway_attachment;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function TransitGatewayAttachment(props: NodeProps) {
  return (
    <Shape
      {...TRANSIT_GATEWAY_ATTACHMENT}
      {...props}
      _style={extendStyle(TRANSIT_GATEWAY_ATTACHMENT, props)}
    />
  )
}
