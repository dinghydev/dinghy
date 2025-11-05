import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IVISION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ivision;',
  },
  _original_width: 55.2,
  _original_height: 54.900000000000006,
}

export function Ivision(props: NodeProps) {
  return <Shape {...IVISION} {...props} _style={extendStyle(IVISION, props)} />
}
