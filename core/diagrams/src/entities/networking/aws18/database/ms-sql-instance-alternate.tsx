import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MS_SQL_INSTANCE_ALTERNATE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.ms_sql_instance_alternate;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function MsSqlInstanceAlternate(props: NodeProps) {
  return (
    <Shape
      {...MS_SQL_INSTANCE_ALTERNATE}
      {...props}
      _style={extendStyle(MS_SQL_INSTANCE_ALTERNATE, props)}
    />
  )
}
