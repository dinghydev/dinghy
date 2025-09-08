import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATABASE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database;',
  },
  _original_width: 35,
  _original_height: 49,
}

export function Database(props: DiagramNodeProps) {
  return (
    <Shape {...DATABASE} {...props} _style={extendStyle(DATABASE, props)} />
  )
}
