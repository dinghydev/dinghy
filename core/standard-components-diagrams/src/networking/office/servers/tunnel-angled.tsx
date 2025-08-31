import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TUNNEL_ANGLED = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.tunnel_angled;',
  _width: 55,
  _height: 35,
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
