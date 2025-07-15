import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SQL_MASTER = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.sql_master;fillColor=#2E73B8;gradientColor=none;',
  _width: 60,
  _height: 64.5,
}

export function SqlMaster(props: DiagramNodeProps) {
  return <Shape {...SQL_MASTER} {...props} />
}
