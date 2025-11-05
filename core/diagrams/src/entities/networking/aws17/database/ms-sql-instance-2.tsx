import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MS_SQL_INSTANCE_2 = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.ms_sql_instance;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 64.5,
}

export function MsSqlInstance2(props: NodeProps) {
  return (
    <Shape
      {...MS_SQL_INSTANCE_2}
      {...props}
      _style={extendStyle(MS_SQL_INSTANCE_2, props)}
    />
  )
}
