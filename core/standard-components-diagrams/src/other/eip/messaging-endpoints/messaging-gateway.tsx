import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MESSAGING_GATEWAY = {
  _style: {
    entity:
      'fillColor=#c0f5a9;dashed=0;outlineConnect=0;strokeWidth=2;html=1;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.messaging_gateway;',
  },
  _original_width: 150,
  _original_height: 90,
}

export function MessagingGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGING_GATEWAY}
      {...props}
      _style={extendStyle(MESSAGING_GATEWAY, props)}
    />
  )
}
