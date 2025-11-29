import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CASSANDRA_WIDE_COLUMN_DATABASE_2 = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cassandra_wide-column_database_02;',
  },
  _original_width: 51.3,
  _original_height: 54.900000000000006,
}

export function CassandraWideColumnDatabase2(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CASSANDRA_WIDE_COLUMN_DATABASE_2)}
    />
  )
}
