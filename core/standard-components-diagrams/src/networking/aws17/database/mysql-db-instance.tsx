import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MYSQL_DB_INSTANCE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.mysql_db_instance;fillColor=#2E73B8;gradientColor=none;',
  _width: 60,
  _height: 64.5,
}

export function MysqlDbInstance(props: DiagramNodeProps) {
  return <Shape {...MYSQL_DB_INSTANCE} {...props} />
}
