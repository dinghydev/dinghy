import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_DATABASE_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.virtual_database_server;',
  },
  _original_width: 41,
  _original_height: 56,
}

export function VirtualDatabaseServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_DATABASE_SERVER}
      {...props}
      _style={extendStyle(VIRTUAL_DATABASE_SERVER, props)}
    />
  )
}
