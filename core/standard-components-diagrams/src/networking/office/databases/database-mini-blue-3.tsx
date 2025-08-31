import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_MINI_BLUE_3 = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_mini_3;fillColor=#2072B8;',
  },
  _width: 35,
  _height: 57,
}

export function DatabaseMiniBlue3(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_MINI_BLUE_3}
      {...props}
      _style={extendStyle(DATABASE_MINI_BLUE_3, props)}
    />
  )
}
