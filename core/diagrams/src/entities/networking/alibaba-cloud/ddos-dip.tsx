import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DDOS_DIP = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ddos-dip;',
  },
  _original_width: 48.300000000000004,
  _original_height: 55.2,
}

export function DdosDip(props: NodeProps) {
  return (
    <Shape {...DDOS_DIP} {...props} _style={extendStyle(DDOS_DIP, props)} />
  )
}
