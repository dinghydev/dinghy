import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRIVATELINK = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.privatelink;',
  },
  _original_width: 56.1,
  _original_height: 56.699999999999996,
}

export function Privatelink(props: NodeProps) {
  return (
    <Shape
      {...PRIVATELINK}
      {...props}
      _style={extendStyle(PRIVATELINK, props)}
    />
  )
}
