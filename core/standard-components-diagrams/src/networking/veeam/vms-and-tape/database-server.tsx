import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_SERVER = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.database_server;',
  },
  _width: 76,
  _height: 72,
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
