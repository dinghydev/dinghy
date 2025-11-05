import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_SERVER_ORANGE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.database_server_orange;',
  },
  _original_width: 43,
  _original_height: 56,
}

export function DatabaseServerOrange(props: NodeProps) {
  return (
    <Shape
      {...DATABASE_SERVER_ORANGE}
      {...props}
      _style={extendStyle(DATABASE_SERVER_ORANGE, props)}
    />
  )
}
