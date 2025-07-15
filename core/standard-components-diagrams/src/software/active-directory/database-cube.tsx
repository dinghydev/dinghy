import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE_CUBE = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/database_cube.svg;',
  _width: 45,
  _height: 50,
}

export function DatabaseCube(props: DiagramNodeProps) {
  return <Shape {...DATABASE_CUBE} {...props} />
}
