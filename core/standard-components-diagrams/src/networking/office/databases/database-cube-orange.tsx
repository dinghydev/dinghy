import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE_CUBE_ORANGE = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_cube;fillColor=#DA4026;',
  _width: 47,
  _height: 52,
}

export function DatabaseCubeOrange(props: DiagramNodeProps) {
  return <Shape {...DATABASE_CUBE_ORANGE} {...props} />
}
