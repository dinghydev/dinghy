import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATABASE_MINI_BLUE_2 = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_mini_2;fillColor=#2072B8;',
  },
  _width: 35,
  _height: 42,
}

export function DatabaseMiniBlue2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_MINI_BLUE_2}
      {...props}
      _style={extendStyle(DATABASE_MINI_BLUE_2, props)}
    />
  )
}
