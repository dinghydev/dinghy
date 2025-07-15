import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SQL_DATABASE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/SQL_Database.svg;',
  _width: 48,
  _height: 64,
}

export function SqlDatabase(props: DiagramNodeProps) {
  return <Shape {...SQL_DATABASE} {...props} />
}
