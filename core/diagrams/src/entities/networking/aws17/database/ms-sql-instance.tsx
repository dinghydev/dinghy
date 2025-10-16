import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MS_SQL_INSTANCE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.ms_sql_instance_2;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 63,
}

export function MsSqlInstance(props: DiagramNodeProps) {
  return (
    <Shape
      {...MS_SQL_INSTANCE}
      {...props}
      _style={extendStyle(MS_SQL_INSTANCE, props)}
    />
  )
}
