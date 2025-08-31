import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MYSQL_DB_INSTANCE_2 = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.mysql_db_instance_2;fillColor=#2E73B8;gradientColor=none;',
  },
  _width: 60,
  _height: 63,
}

export function MysqlDbInstance2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MYSQL_DB_INSTANCE_2}
      {...props}
      _style={extendStyle(MYSQL_DB_INSTANCE_2, props)}
    />
  )
}
