import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TUNNEL_ANGLED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.tunnel_angled;',
  },
  _original_width: 55,
  _original_height: 35,
}

export function TunnelAngled(props: DiagramNodeProps) {
  return (
    <Shape
      {...TUNNEL_ANGLED}
      {...props}
      _style={extendStyle(TUNNEL_ANGLED, props)}
    />
  )
}
