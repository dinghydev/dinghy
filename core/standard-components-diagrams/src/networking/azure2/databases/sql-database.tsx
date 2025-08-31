import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQL_DATABASE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/SQL_Database.svg;strokeColor=none;',
  _width: 48,
  _height: 64,
}

export function SqlDatabase(props: DiagramNodeProps) {
  return (
    <Shape
      {...SQL_DATABASE}
      {...props}
      _style={extendStyle(SQL_DATABASE, props)}
    />
  )
}
