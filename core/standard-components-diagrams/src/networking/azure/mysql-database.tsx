import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MYSQL_DATABASE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.mysql_database;',
  },
  _original_width: 37.5,
  _original_height: 50,
}

export function MysqlDatabase(props: DiagramNodeProps) {
  return (
    <Shape
      {...MYSQL_DATABASE}
      {...props}
      _style={extendStyle(MYSQL_DATABASE, props)}
    />
  )
}
