import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VPN = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.vpn',
  },
  _original_width: 100,
  _original_height: 50,
}

export function Vpn(props: DiagramNodeProps) {
  return <Shape {...VPN} {...props} _style={extendStyle(VPN, props)} />
}
