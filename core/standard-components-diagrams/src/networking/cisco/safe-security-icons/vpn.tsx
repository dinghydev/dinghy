import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VPN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.vpn;',
  },
  _original_width: 43,
  _original_height: 50,
}

export function Vpn(props: DiagramNodeProps) {
  return <Shape {...VPN} {...props} _style={extendStyle(VPN, props)} />
}
