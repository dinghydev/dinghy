import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VPN = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.vpn;',
  },
  _width: 54,
  _height: 38,
}

export function Vpn(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VPN)} />
}
