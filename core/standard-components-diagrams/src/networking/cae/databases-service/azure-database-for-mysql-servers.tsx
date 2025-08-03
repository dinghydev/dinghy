import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_DATABASE_FOR_MYSQL_SERVERS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Database_for_MySQL_servers.svg;strokeColor=none;',
  _width: 38,
  _height: 50,
}

export function AzureDatabaseForMysqlServers(props: DiagramNodeProps) {
  return <Shape {...AZURE_DATABASE_FOR_MYSQL_SERVERS} {...props} />
}
