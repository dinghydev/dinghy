import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQL_SERVER_STRETCH_DB = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/dep/SQL_Server_Stretch_DB.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function SqlServerStretchDb(props: DiagramNodeProps) {
  return (
    <Shape
      {...SQL_SERVER_STRETCH_DB}
      {...props}
      _style={extendStyle(SQL_SERVER_STRETCH_DB, props)}
    />
  )
}
