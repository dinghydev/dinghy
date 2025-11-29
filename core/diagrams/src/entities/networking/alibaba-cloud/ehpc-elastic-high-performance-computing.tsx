import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EHPC_ELASTIC_HIGH_PERFORMANCE_COMPUTING = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ehpc_elastic_high_performance_computing;',
  },
  _original_width: 43.199999999999996,
  _original_height: 47.7,
}

export function EhpcElasticHighPerformanceComputing(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, EHPC_ELASTIC_HIGH_PERFORMANCE_COMPUTING)}
    />
  )
}
