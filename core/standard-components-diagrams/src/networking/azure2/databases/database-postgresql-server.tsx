import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_POSTGRESQL_SERVER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_Database_PostgreSQL_Server.svg;strokeColor=none;',
  },
  _width: 48,
  _height: 64,
}

export function DatabasePostgresqlServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_POSTGRESQL_SERVER}
      {...props}
      _style={extendStyle(DATABASE_POSTGRESQL_SERVER, props)}
    />
  )
}
