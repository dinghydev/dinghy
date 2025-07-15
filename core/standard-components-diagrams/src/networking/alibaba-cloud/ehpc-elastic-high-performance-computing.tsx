import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EHPC_ELASTIC_HIGH_PERFORMANCE_COMPUTING = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ehpc_elastic_high_performance_computing;',
  _width: 43.199999999999996,
  _height: 47.7,
}

export function EhpcElasticHighPerformanceComputing(props: DiagramNodeProps) {
  return <Shape {...EHPC_ELASTIC_HIGH_PERFORMANCE_COMPUTING} {...props} />
}
