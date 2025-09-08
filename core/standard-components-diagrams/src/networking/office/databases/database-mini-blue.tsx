import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATABASE_MINI_BLUE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_mini_1;fillColor=#2072B8;',
  },
  _original_width: 35,
  _original_height: 27,
}

export function DatabaseMiniBlue(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_MINI_BLUE}
      {...props}
      _style={extendStyle(DATABASE_MINI_BLUE, props)}
    />
  )
}
