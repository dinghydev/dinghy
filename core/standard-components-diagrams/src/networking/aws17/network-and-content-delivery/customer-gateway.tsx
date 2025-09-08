import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CUSTOMER_GATEWAY = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.customer_gateway;fillColor=#F58536;gradientColor=none;',
  },
  _original_width: 69,
  _original_height: 72,
}

export function CustomerGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...CUSTOMER_GATEWAY}
      {...props}
      _style={extendStyle(CUSTOMER_GATEWAY, props)}
    />
  )
}
