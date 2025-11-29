import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROUTER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.router;',
  },
  _original_width: 55.2,
  _original_height: 57.599999999999994,
}

export function Router(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROUTER)} />
}
