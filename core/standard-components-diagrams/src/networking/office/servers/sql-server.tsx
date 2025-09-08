import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SQL_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.sql_server;',
  },
  _original_width: 43,
  _original_height: 56,
}

export function SqlServer(props: DiagramNodeProps) {
  return (
    <Shape {...SQL_SERVER} {...props} _style={extendStyle(SQL_SERVER, props)} />
  )
}
