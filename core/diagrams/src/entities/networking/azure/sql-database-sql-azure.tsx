import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SQL_DATABASE_SQL_AZURE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.sql_database_sql_azure;',
  },
  _original_width: 47.5,
  _original_height: 50,
}

export function SqlDatabaseSqlAzure(props: NodeProps) {
  return (
    <Shape
      {...SQL_DATABASE_SQL_AZURE}
      {...props}
      _style={extendStyle(SQL_DATABASE_SQL_AZURE, props)}
    />
  )
}
