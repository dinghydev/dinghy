import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ORACLE_DB_INSTANCE_2 = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.oracle_db_instance_2;fillColor=#2E73B8;gradientColor=none;',
  _width: 60,
  _height: 63,
}

export function OracleDbInstance2(props: DiagramNodeProps) {
  return <Shape {...ORACLE_DB_INSTANCE_2} {...props} />
}
