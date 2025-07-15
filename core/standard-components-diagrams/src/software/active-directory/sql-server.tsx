import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SQL_SERVER = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/sql_server.svg;',
  _width: 38.5,
  _height: 50,
}

export function SqlServer(props: DiagramNodeProps) {
  return <Shape {...SQL_SERVER} {...props} />
}
