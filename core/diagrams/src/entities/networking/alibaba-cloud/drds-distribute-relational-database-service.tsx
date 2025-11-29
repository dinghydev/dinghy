import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DRDS_DISTRIBUTE_RELATIONAL_DATABASE_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.drds_distribute_relational_database_service;',
  },
  _original_width: 44.4,
  _original_height: 47.400000000000006,
}

export function DrdsDistributeRelationalDatabaseService(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, DRDS_DISTRIBUTE_RELATIONAL_DATABASE_SERVICE)}
    />
  )
}
