import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_POSTGRESQL_SERVER_GROUP = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_Database_PostgreSQL_Server_Group.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 68,
}

export function DatabasePostgresqlServerGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_POSTGRESQL_SERVER_GROUP}
      {...props}
      _style={extendStyle(DATABASE_POSTGRESQL_SERVER_GROUP, props)}
    />
  )
}
