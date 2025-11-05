import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_MIRROR = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_mirror;',
  },
  _original_width: 60,
  _original_height: 59,
}

export function DatabaseMirror(props: NodeProps) {
  return (
    <Shape
      {...DATABASE_MIRROR}
      {...props}
      _style={extendStyle(DATABASE_MIRROR, props)}
    />
  )
}
