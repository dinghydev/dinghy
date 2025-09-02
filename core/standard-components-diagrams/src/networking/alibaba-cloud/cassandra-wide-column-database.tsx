import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CASSANDRA_WIDE_COLUMN_DATABASE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cassandra_wide-column_database_01;',
  },
  _original_width: 43.8,
  _original_height: 46.800000000000004,
}

export function CassandraWideColumnDatabase(props: DiagramNodeProps) {
  return (
    <Shape
      {...CASSANDRA_WIDE_COLUMN_DATABASE}
      {...props}
      _style={extendStyle(CASSANDRA_WIDE_COLUMN_DATABASE, props)}
    />
  )
}
