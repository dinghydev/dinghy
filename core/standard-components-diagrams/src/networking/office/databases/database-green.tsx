import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATABASE_GREEN = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database;fillColor=#7FBA42;',
  },
  _original_width: 35,
  _original_height: 49,
}

export function DatabaseGreen(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_GREEN}
      {...props}
      _style={extendStyle(DATABASE_GREEN, props)}
    />
  )
}
