import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_DATABASE_SERVER_BLUE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.virtual_database_server;fillColor=#2072B8;',
  _width: 41,
  _height: 56,
}

export function VirtualDatabaseServerBlue(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_DATABASE_SERVER_BLUE}
      {...props}
      _style={extendStyle(VIRTUAL_DATABASE_SERVER_BLUE, props)}
    />
  )
}
