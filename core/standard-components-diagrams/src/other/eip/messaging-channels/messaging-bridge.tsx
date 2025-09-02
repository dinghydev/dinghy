import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGING_BRIDGE = {
  _style: {
    entity:
      'strokeWidth=2;outlineConnect=0;dashed=0;align=center;html=1;fontSize=8;shape=mxgraph.eip.messaging_bridge;verticalLabelPosition=bottom;verticalAlign=top;fillColor=#c0f5a9;',
  },
  _original_width: 150,
  _original_height: 90,
}

export function MessagingBridge(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGING_BRIDGE}
      {...props}
      _style={extendStyle(MESSAGING_BRIDGE, props)}
    />
  )
}
