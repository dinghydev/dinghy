import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SQL_SERVER_STRETCH_DATABASES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_SQL_Server_Stretch_Databases.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 65,
}

export function SqlServerStretchDatabases(props: DiagramNodeProps) {
  return (
    <Shape
      {...SQL_SERVER_STRETCH_DATABASES}
      {...props}
      _style={extendStyle(SQL_SERVER_STRETCH_DATABASES, props)}
    />
  )
}
