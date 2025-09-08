import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SQL_DATABASE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.sql_database;',
  },
  _original_width: 37.5,
  _original_height: 50,
}

export function SqlDatabase(props: DiagramNodeProps) {
  return (
    <Shape
      {...SQL_DATABASE}
      {...props}
      _style={extendStyle(SQL_DATABASE, props)}
    />
  )
}
