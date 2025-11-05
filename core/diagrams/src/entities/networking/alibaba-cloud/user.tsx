import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.user;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function User(props: NodeProps) {
  return <Shape {...USER} {...props} _style={extendStyle(USER, props)} />
}
