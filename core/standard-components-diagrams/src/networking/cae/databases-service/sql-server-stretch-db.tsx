import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SQL_SERVER_STRETCH_DB = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/dep/SQL_Server_Stretch_DB.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
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
