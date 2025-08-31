import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQL_DATABASE_SQL_AZURE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.sql_database_sql_azure;',
  },
  _width: 47.5,
  _height: 50,
}

export function SqlDatabaseSqlAzure(props: DiagramNodeProps) {
  return (
    <Shape
      {...SQL_DATABASE_SQL_AZURE}
      {...props}
      _style={extendStyle(SQL_DATABASE_SQL_AZURE, props)}
    />
  )
}
