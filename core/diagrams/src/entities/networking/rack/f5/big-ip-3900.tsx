import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BIG_IP_3900 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.big_ip_3900;',
  },
  _width: 168,
  _height: 20,
}

export function BigIp3900(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BIG_IP_3900)} />
}
