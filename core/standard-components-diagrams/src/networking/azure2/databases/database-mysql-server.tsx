import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_MYSQL_SERVER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_Database_MySQL_Server.svg;strokeColor=none;',
  _width: 48,
  _height: 64,
}

export function DatabaseMysqlServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_MYSQL_SERVER}
      {...props}
      _style={extendStyle(DATABASE_MYSQL_SERVER, props)}
    />
  )
}
