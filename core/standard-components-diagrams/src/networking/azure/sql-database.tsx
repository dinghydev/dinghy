import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SQL_DATABASE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.sql_database;',
  _width: 37.5,
  _height: 50,
}

export function SqlDatabase(props: DiagramNodeProps) {
  return <Shape {...SQL_DATABASE} {...props} />
}
