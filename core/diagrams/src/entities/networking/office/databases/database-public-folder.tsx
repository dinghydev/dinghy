import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_PUBLIC_FOLDER = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_public_folder;',
  },
  _original_width: 53,
  _original_height: 54,
}

export function DatabasePublicFolder(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, DATABASE_PUBLIC_FOLDER)} />
  )
}
