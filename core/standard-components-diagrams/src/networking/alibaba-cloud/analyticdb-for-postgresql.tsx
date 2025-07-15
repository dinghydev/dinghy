import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANALYTICDB_FOR_POSTGRESQL = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.analyticdb_for_postgresql;',
  _width: 50.099999999999994,
  _height: 49.5,
}

export function AnalyticdbForPostgresql(props: DiagramNodeProps) {
  return <Shape {...ANALYTICDB_FOR_POSTGRESQL} {...props} />
}
