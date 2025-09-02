import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_CUBE_GHOSTED = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_cube;fillColor=#CCCBCB;',
  },
  _original_width: 47,
  _original_height: 52,
}

export function DatabaseCubeGhosted(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_CUBE_GHOSTED}
      {...props}
      _style={extendStyle(DATABASE_CUBE_GHOSTED, props)}
    />
  )
}
