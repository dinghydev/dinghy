import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_SERVER = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_server;',
  },
  _width: 43,
  _height: 57,
}

export function DatabaseServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_SERVER}
      {...props}
      _style={extendStyle(DATABASE_SERVER, props)}
    />
  )
}
