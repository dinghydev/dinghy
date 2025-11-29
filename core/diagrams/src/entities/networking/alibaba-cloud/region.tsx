import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REGION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.region;',
  },
  _original_width: 47.400000000000006,
  _original_height: 54.300000000000004,
}

export function Region(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, REGION)} />
}
