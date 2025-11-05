import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_SERVER_GREEN = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_server_green;',
  },
  _original_width: 43,
  _original_height: 57,
}

export function DatabaseServerGreen(props: NodeProps) {
  return (
    <Shape
      {...DATABASE_SERVER_GREEN}
      {...props}
      _style={extendStyle(DATABASE_SERVER_GREEN, props)}
    />
  )
}
