import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DRDS_DISTRIBUTE_RELATIONAL_DATABASE_SERVICE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.drds_distribute_relational_database_service;',
  _width: 44.4,
  _height: 47.400000000000006,
}

export function DrdsDistributeRelationalDatabaseService(
  props: DiagramNodeProps,
) {
  return <Shape {...DRDS_DISTRIBUTE_RELATIONAL_DATABASE_SERVICE} {...props} />
}
