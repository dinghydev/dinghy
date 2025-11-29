import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MPS_DNA = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mps-dna;',
  },
  _original_width: 57.3,
  _original_height: 55.800000000000004,
}

export function MpsDna(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MPS_DNA)} />
}
