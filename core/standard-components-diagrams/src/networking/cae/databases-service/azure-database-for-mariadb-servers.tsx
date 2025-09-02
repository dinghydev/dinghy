import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_DATABASE_FOR_MARIADB_SERVERS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/aspect=fixed;html=1;perimeter=none;align=center;shadow=0;dashed=0;fontSize=12;image=img/lib/mscae/Azure_Database_for_MariaDB_servers.svg;strokeColor=none;',
  },
  _original_width: 38,
  _original_height: 50,
}

export function AzureDatabaseForMariadbServers(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_DATABASE_FOR_MARIADB_SERVERS}
      {...props}
      _style={extendStyle(AZURE_DATABASE_FOR_MARIADB_SERVERS, props)}
    />
  )
}
