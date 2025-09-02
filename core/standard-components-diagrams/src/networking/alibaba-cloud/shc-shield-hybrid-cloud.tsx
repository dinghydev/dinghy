import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHC_SHIELD_HYBRID_CLOUD = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.shc_shield_hybrid_cloud;',
  },
  _original_width: 49.199999999999996,
  _original_height: 45.3,
}

export function ShcShieldHybridCloud(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHC_SHIELD_HYBRID_CLOUD}
      {...props}
      _style={extendStyle(SHC_SHIELD_HYBRID_CLOUD, props)}
    />
  )
}
