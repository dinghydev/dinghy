import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VPN = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.vpn;',
  _width: 43,
  _height: 50,
}

export function Vpn(props: DiagramNodeProps) {
  return <Shape {...VPN} {...props} />
}
