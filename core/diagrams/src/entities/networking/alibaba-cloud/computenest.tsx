import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPUTENEST = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.computenest;',
  },
  _original_width: 50.099999999999994,
  _original_height: 44.4,
}

export function Computenest(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COMPUTENEST)} />
}
