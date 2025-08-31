import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_MINI_GREEN_2 = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_mini_2;fillColor=#7FBA42;',
  },
  _width: 35,
  _height: 42,
}

export function DatabaseMiniGreen2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_MINI_GREEN_2}
      {...props}
      _style={extendStyle(DATABASE_MINI_GREEN_2, props)}
    />
  )
}
