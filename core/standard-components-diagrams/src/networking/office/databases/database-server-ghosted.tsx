import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE_SERVER_GHOSTED = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_server_ghosted;',
  _width: 43,
  _height: 57,
}

export function DatabaseServerGhosted(props: DiagramNodeProps) {
  return <Shape {...DATABASE_SERVER_GHOSTED} {...props} />
}
