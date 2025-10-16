import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VPN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.vpn;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Vpn(props: DiagramNodeProps) {
  return <Shape {...VPN} {...props} _style={extendStyle(VPN, props)} />
}
