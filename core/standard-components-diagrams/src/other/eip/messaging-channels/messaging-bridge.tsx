import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGING_BRIDGE = {
  _style:
    'strokeWidth=2;outlineConnect=0;dashed=0;align=center;html=1;fontSize=8;shape=mxgraph.eip.messaging_bridge;verticalLabelPosition=bottom;verticalAlign=top;fillColor=#c0f5a9;',
  _width: 150,
  _height: 90,
}

export function MessagingBridge(props: DiagramNodeProps) {
  return <Shape {...MESSAGING_BRIDGE} {...props} />
}
