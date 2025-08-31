import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQL_SERVER_STRETCH_DATABASES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_SQL_Server_Stretch_Databases.svg;strokeColor=none;',
  },
  _width: 64,
  _height: 65,
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
