import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_CUBE_BLUE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_cube;fillColor=#2072B8;',
  },
  _original_width: 47,
  _original_height: 52,
}

export function DatabaseCubeBlue(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATABASE_CUBE_BLUE)} />
}
