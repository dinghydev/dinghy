import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_CUBE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_cube;',
  },
  _width: 47,
  _height: 52,
}

export function DatabaseCube(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_CUBE}
      {...props}
      _style={extendStyle(DATABASE_CUBE, props)}
    />
  )
}
