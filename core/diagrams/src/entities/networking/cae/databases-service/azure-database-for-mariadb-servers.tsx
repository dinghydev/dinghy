import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_DATABASE_FOR_MARIADB_SERVERS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/aspect=fixed;html=1;perimeter=none;align=center;shadow=0;dashed=0;fontSize=12;image=img/lib/mscae/Azure_Database_for_MariaDB_servers.svg;strokeColor=none;',
  },
  _width: 38,
  _height: 50,
}

export function AzureDatabaseForMariadbServers(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, AZURE_DATABASE_FOR_MARIADB_SERVERS)}
    />
  )
}
