import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATABASE_MINI_2 = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_mini_2;',
  },
  _width: 35,
  _height: 42,
}

export function DatabaseMini2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_MINI_2}
      {...props}
      _style={extendStyle(DATABASE_MINI_2, props)}
    />
  )
}
