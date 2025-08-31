import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQL_SERVER_REGISTRIES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/SQL_Server_Registries.svg;strokeColor=none;',
  _width: 68,
  _height: 62,
}

export function SqlServerRegistries(props: DiagramNodeProps) {
  return (
    <Shape
      {...SQL_SERVER_REGISTRIES}
      {...props}
      _style={extendStyle(SQL_SERVER_REGISTRIES, props)}
    />
  )
}
