import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE_SERVER = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/database_server.svg;',
  _width: 41,
  _height: 50,
}

export function DatabaseServer(props: DiagramNodeProps) {
  return <Shape {...DATABASE_SERVER} {...props} />
}
