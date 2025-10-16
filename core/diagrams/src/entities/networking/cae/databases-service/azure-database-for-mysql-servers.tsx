import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AZURE_DATABASE_FOR_MYSQL_SERVERS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Database_for_MySQL_servers.svg;strokeColor=none;',
  },
  _width: 38,
  _height: 50,
}

export function AzureDatabaseForMysqlServers(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_DATABASE_FOR_MYSQL_SERVERS}
      {...props}
      _style={extendStyle(AZURE_DATABASE_FOR_MYSQL_SERVERS, props)}
    />
  )
}
