import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQL_SLAVE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.sql_slave;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 64.5,
}

export function SqlSlave(props: DiagramNodeProps) {
  return (
    <Shape {...SQL_SLAVE} {...props} _style={extendStyle(SQL_SLAVE, props)} />
  )
}
