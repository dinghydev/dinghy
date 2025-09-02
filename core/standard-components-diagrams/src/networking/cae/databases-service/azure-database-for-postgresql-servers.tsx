import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_DATABASE_FOR_POSTGRESQL_SERVERS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Database_for_PostgreSQL_servers.svg;strokeColor=none;',
  },
  _original_width: 38,
  _original_height: 50,
}

export function AzureDatabaseForPostgresqlServers(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_DATABASE_FOR_POSTGRESQL_SERVERS}
      {...props}
      _style={extendStyle(AZURE_DATABASE_FOR_POSTGRESQL_SERVERS, props)}
    />
  )
}
