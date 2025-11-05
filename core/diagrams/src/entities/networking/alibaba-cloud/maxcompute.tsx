import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAXCOMPUTE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.maxcompute;',
  },
  _original_width: 50.099999999999994,
  _original_height: 50.099999999999994,
}

export function Maxcompute(props: NodeProps) {
  return (
    <Shape {...MAXCOMPUTE} {...props} _style={extendStyle(MAXCOMPUTE, props)} />
  )
}
