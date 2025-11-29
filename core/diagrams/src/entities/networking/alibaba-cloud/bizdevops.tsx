import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BIZDEVOPS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.bizdevops;',
  },
  _original_width: 60.3,
  _original_height: 50.099999999999994,
}

export function Bizdevops(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BIZDEVOPS)} />
}
