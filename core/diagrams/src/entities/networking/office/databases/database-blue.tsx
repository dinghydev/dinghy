import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_BLUE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database;fillColor=#2072B8;',
  },
  _width: 35,
  _height: 49,
}

export function DatabaseBlue(props: NodeProps) {
  return (
    <Shape
      {...DATABASE_BLUE}
      {...props}
      _style={extendStyle(DATABASE_BLUE, props)}
    />
  )
}
