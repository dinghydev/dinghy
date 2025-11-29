import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MPS_CENSOR = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mps-censor;',
  },
  _original_width: 56.1,
  _original_height: 54.900000000000006,
}

export function MpsCensor(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MPS_CENSOR)} />
}
