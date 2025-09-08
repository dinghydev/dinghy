import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POSTGRE_SQL_INSTANCE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.postgre_sql_instance;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 63,
}

export function PostgreSqlInstance(props: DiagramNodeProps) {
  return (
    <Shape
      {...POSTGRE_SQL_INSTANCE}
      {...props}
      _style={extendStyle(POSTGRE_SQL_INSTANCE, props)}
    />
  )
}
