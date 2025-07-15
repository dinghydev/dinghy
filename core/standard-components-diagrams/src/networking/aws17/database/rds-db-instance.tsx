import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RDS_DB_INSTANCE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.rds_db_instance;fillColor=#2E73B8;gradientColor=none;',
  _width: 49.5,
  _height: 66,
}

export function RdsDbInstance(props: DiagramNodeProps) {
  return <Shape {...RDS_DB_INSTANCE} {...props} />
}
