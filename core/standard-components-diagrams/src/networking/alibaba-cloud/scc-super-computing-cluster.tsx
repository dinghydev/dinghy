import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCC_SUPER_COMPUTING_CLUSTER = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.scc_super_computing_cluster;',
  _width: 48.6,
  _height: 53.4,
}

export function SccSuperComputingCluster(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCC_SUPER_COMPUTING_CLUSTER}
      {...props}
      _style={extendStyle(SCC_SUPER_COMPUTING_CLUSTER, props)}
    />
  )
}
