import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.database_server;',
  },
  _original_width: 80,
  _original_height: 90,
}

export function DatabaseServer(props: NodeProps) {
  return (
    <Shape
      {...DATABASE_SERVER}
      {...props}
      _style={extendStyle(DATABASE_SERVER, props)}
    />
  )
}
