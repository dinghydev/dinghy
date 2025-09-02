import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HDR_HYBRID_DISASTER_RECOVERY = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.hdr_hybrid_disaster_recovery;',
  },
  _original_width: 47.400000000000006,
  _original_height: 47.400000000000006,
}

export function HdrHybridDisasterRecovery(props: DiagramNodeProps) {
  return (
    <Shape
      {...HDR_HYBRID_DISASTER_RECOVERY}
      {...props}
      _style={extendStyle(HDR_HYBRID_DISASTER_RECOVERY, props)}
    />
  )
}
