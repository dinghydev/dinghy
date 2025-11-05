import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RDS_DB_INSTANCE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.rds_db_instance;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 49.5,
  _original_height: 66,
}

export function RdsDbInstance(props: NodeProps) {
  return (
    <Shape
      {...RDS_DB_INSTANCE}
      {...props}
      _style={extendStyle(RDS_DB_INSTANCE, props)}
    />
  )
}
