import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LINKEDMALL = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.linkedmall;',
  },
  _original_width: 43.199999999999996,
  _original_height: 42,
}

export function Linkedmall(props: NodeProps) {
  return (
    <Shape {...LINKEDMALL} {...props} _style={extendStyle(LINKEDMALL, props)} />
  )
}
