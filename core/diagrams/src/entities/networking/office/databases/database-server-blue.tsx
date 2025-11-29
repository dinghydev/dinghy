import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_SERVER_BLUE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_server_blue;',
  },
  _original_width: 43,
  _original_height: 57,
}

export function DatabaseServerBlue(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATABASE_SERVER_BLUE)} />
}
