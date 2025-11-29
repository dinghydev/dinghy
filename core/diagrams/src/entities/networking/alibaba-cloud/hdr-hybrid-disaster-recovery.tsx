import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HDR_HYBRID_DISASTER_RECOVERY = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.hdr_hybrid_disaster_recovery;',
  },
  _original_width: 47.400000000000006,
  _original_height: 47.400000000000006,
}

export function HdrHybridDisasterRecovery(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, HDR_HYBRID_DISASTER_RECOVERY)}
    />
  )
}
