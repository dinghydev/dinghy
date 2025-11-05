import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROPHET = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.prophet;',
  },
  _original_width: 46.800000000000004,
  _original_height: 47.7,
}

export function Prophet(props: NodeProps) {
  return <Shape {...PROPHET} {...props} _style={extendStyle(PROPHET, props)} />
}
