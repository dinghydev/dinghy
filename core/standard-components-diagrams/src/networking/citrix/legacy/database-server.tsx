import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.database_server;',
  },
  _width: 80,
  _height: 90,
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
