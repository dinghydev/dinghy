import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MS_SQL_INSTANCE_2 = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.ms_sql_instance;fillColor=#2E73B8;gradientColor=none;',
  _width: 60,
  _height: 64.5,
}

export function MsSqlInstance2(props: DiagramNodeProps) {
  return <Shape {...MS_SQL_INSTANCE_2} {...props} />
}
