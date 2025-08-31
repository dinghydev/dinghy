import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQL_DATABASES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/SQL_Database_generic.svg;strokeColor=none;',
  _width: 38,
  _height: 50,
}

export function SqlDatabases(props: DiagramNodeProps) {
  return (
    <Shape
      {...SQL_DATABASES}
      {...props}
      _style={extendStyle(SQL_DATABASES, props)}
    />
  )
}
