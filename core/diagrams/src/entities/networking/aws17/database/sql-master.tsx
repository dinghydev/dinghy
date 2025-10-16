import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SQL_MASTER = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.sql_master;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 64.5,
}

export function SqlMaster(props: DiagramNodeProps) {
  return (
    <Shape {...SQL_MASTER} {...props} _style={extendStyle(SQL_MASTER, props)} />
  )
}
