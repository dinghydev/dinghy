import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MYSQL_DATABASE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.mysql_database;',
  },
  _width: 37.5,
  _height: 50,
}

export function MysqlDatabase(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MYSQL_DATABASE)} />
}
