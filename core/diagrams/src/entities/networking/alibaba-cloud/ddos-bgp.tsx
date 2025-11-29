import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DDOS_BGP = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ddos-bgp;',
  },
  _original_width: 47.400000000000006,
  _original_height: 47.1,
}

export function DdosBgp(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DDOS_BGP)} />
}
