import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const E_MAPREDUCE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.e-mapreduce;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function EMapreduce(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, E_MAPREDUCE)} />
}
