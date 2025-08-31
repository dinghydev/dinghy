import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_MARIADB_SERVER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_Database_MariaDB_Server.svg;strokeColor=none;',
  _width: 48,
  _height: 64,
}

export function DatabaseMariadbServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_MARIADB_SERVER}
      {...props}
      _style={extendStyle(DATABASE_MARIADB_SERVER, props)}
    />
  )
}
