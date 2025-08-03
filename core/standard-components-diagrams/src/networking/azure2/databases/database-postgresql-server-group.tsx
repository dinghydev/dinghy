import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE_POSTGRESQL_SERVER_GROUP = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_Database_PostgreSQL_Server_Group.svg;strokeColor=none;',
  _width: 60,
  _height: 68,
}

export function DatabasePostgresqlServerGroup(props: DiagramNodeProps) {
  return <Shape {...DATABASE_POSTGRESQL_SERVER_GROUP} {...props} />
}
