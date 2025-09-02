import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TUNNEL_STRAIGHT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.tunnel_straight;',
  },
  _original_width: 59,
  _original_height: 10,
}

export function TunnelStraight(props: DiagramNodeProps) {
  return (
    <Shape
      {...TUNNEL_STRAIGHT}
      {...props}
      _style={extendStyle(TUNNEL_STRAIGHT, props)}
    />
  )
}
