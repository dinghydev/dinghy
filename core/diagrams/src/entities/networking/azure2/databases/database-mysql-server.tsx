import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_MYSQL_SERVER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_Database_MySQL_Server.svg;strokeColor=none;',
  },
  _original_width: 48,
  _original_height: 64,
}

export function DatabaseMysqlServer(props: NodeProps) {
  return (
    <Shape
      {...DATABASE_MYSQL_SERVER}
      {...props}
      _style={extendStyle(DATABASE_MYSQL_SERVER, props)}
    />
  )
}
